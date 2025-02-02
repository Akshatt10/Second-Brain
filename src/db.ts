import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Explicitly specify the .env file path
dotenv.config({ path: path.resolve(__dirname, "../config.env") });

// Ensure MONGO_URI is defined
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("❌ MONGO_URI is not defined in the environment variables");
}

// Connect to MongoDB with error handling
mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const UserModel = model("User", UserSchema);
