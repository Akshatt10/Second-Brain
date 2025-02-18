import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, UserModel } from "./db";
import dotenv from "dotenv";
import path from "path";
import { userMiddlware } from "./middleware";

const result = dotenv.config({ path: path.resolve(__dirname, "../.env") });

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");  
}

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async(req, res) => {
  const username = req.body.username;
  const password = req.body.password; 

  try {
  await UserModel.create({ 
    username: username,
    password: password 
  });

  res.json({ message: "User created" });
  
  } catch (error) {
    res.status(411).json({ message: "User exists" });
  }
})  

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;

  const ExistingUser = await UserModel.findOne({
    username,
    password,
  });

  if (ExistingUser) {
    const token = jwt.sign(
      {
        id: ExistingUser._id,
      },
      JWT_SECRET 
    );
    res.json({ message: "User signed in", token: token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.post("/api/v1/content", userMiddlware, (req, res) => {
    const link = req.body.link;
    const title = req.body.title;

    ContentModel.create({
      link,
      title,
      //@ts-ignore
      userId: req.userId,
      tags:[],
    });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
