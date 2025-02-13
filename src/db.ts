import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") }); // Load environment variables from a file

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("❌ MONGO_URI is not defined in the environment variables");
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


//USER MODEL AND SCHEMA 

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const UserModel = model("User", UserSchema);

//TAG MODEL AND SCHEMA
const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{type:mongoose.Types.ObjectId, ref: "Tag"}],
  userId: {type: mongoose.Types.ObjectId, ref: "User", required: true}  
});


export const ContentModel = model("Content", ContentSchema);
