import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
});

// Prevent model overwrite issue in Next.js hot reload
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
