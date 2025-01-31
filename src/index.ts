import express from "express"
import jsonwebtoken from "jsonwebtoken"
import mongoose from "mongoose"
const app = express()
// npm install @types/express //-> install types for express to avoid error
// .d.ts file is a declaration file that tells typescript what the types are for a given module

app.post("/api/v1/signup", (req, res) => {
  res.send("Hello World")
})

app.post("/api/v1/signin", (req, res) => { })

app.post("/api/v1/content", (req, res) => { })  

app.get("/api/v1/content", (req, res) => { })

app.delete("/api/v1/content", (req, res) => { })    

app.post("/api/v1/brain/share", (req, res) => { })

app.get("/api/v1/brain/:shareLink", (req, res) => { })