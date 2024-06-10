import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Schema, model } from "mongoose";
import api from "./api";
import { connectDB } from "./db/mongoose";
import cors from "cors";
const likeSchema = new Schema({
  name: String,
  url: String,
  user: String,
});

dotenv.config();
connectDB();

const app = express();
app.use(cors());
const port = process.env["PORT"];
app.use("/", api);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
