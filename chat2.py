from flask import Flask, request, jsonify, render_template
from pymongo import MongoClient
from flask_cors import CORS
import datetime
import google.generativeai as genai
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB setup (adjust URI as needed)
client = MongoClient("mongodb://localhost:27017/")
db = client["chatbot_db"]
chathistory_collection = db["chathistory"]

# Configure Gemini AI
API_KEY = "YOUR_GEMINI_API_KEY"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

translator = Translator()

pre_prompt = """
You are a professional and careful doctor.
- Ask clarifying questions if symptoms are unclear.
- Give short and precise advice in simple language (1-2 sentences).
- Always keep your responses brief and to the point.
- Recommend seeing a doctor immediately if symptoms are severe.
- Always remind the user that this is not a substitute for an in-person examination.
- Respond in a calm and reassuring tone like a real doctor.
"""

@app.route("/chat", methods=["POST"])
def chat_api():
    data = request.get_json(force=True)
    user_id = data.get("user_id", "anonymous")
    user_input = data.get("message", "")

    user_doc = chathistory_collection.find_one({"user_id": user_id})
    if not user_doc:
        messages = [{"role": "system", "parts": [pre_prompt]}]
        chathistory_collection.insert_one({
            "user_id": user_id,
            "messages": messages,
            "updated_at": datetime.datetime.utcnow()
        })
    else:
        messages = user_doc.get("messages", [])

    try:
        detected = translator.detect(user_input)
        user_lang = detected.lang
        user_input_en = translator.translate(user_input, src=user_lang, dest="en").text

        chat = model.start_chat(history=messages)
        response = chat.send_message(user_input_en)
        response_text_en = response.text.strip()

        if user_lang != "en":
            response_text = translator.translate(response_text_en, src="en", dest=user_lang).text
        else:
            response_text = response_text_en

        messages.append({"role": "user", "parts": [user_input]})
        messages.append({"role": "assistant", "parts": [response_text]})

        chathistory_collection.update_one(
            {"user_id": user_id},
            {"$set": {"messages": messages, "updated_at": datetime.datetime.utcnow()}}
        )

        return jsonify({"reply": response_text})

    except Exception as e:
        return jsonify({"reply": f"⚠️ Error: {str(e)}"})

if __name__ == "__main__":
    app.run(debug=True)
