// lib/translateService.js - Official Google API with API Key only
class GoogleTranslateService {
  static async translateText(text, targetLanguage, sourceLanguage = 'en') {
    if (targetLanguage === sourceLanguage) return text;
    
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
      
      if (!apiKey) {
        throw new Error('Google Translate API key not found');
      }

      // Direct Google Cloud Translation API call [web:194][web:208]
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: sourceLanguage,
            target: targetLanguage,
            format: 'text'
          })
        }
      );

      const data = await response.json();
      
      if (data.error) {
        throw new Error(`Translation API Error: ${data.error.message}`);
      }
      
      if (data.data && data.data.translations && data.data.translations[0]) {
        return data.data.translations[0].translatedText;
      }
      
      throw new Error('Invalid response format');
    } catch (error) {
      console.error('Translation error:', error);
      
      // Fallback to free proxy
      try {
        const fallbackResponse = await fetch(
          `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`
        );
        const fallbackData = await fallbackResponse.json();
        return fallbackData[0][0][0] || text;
      } catch (fallbackError) {
        return text;
      }
    }
  }

  // Batch processing
  static async translateMultiple(textArray, targetLanguage, sourceLanguage = 'en') {
    const translations = {};
    
    for (const [key, text] of Object.entries(textArray)) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Rate limiting
      
      if (typeof text === 'string' && text.trim()) {
        translations[key] = await this.translateText(text, targetLanguage, sourceLanguage);
      } else {
        translations[key] = text;
      }
    }
    
    return translations;
  }
}

export default GoogleTranslateService;
