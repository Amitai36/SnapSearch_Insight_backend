import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Schema, model } from "mongoose";
import api from "./api";
import { connectDB } from "./db/mongoose";
const likeSchema = new Schema({
  name: String,
  url: String,
  user: String,
});

// Create a Mongoose model based on the schema
dotenv.config();
connectDB();

const app = express();
const port = process.env["PORT"];
app.use("/", api);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
