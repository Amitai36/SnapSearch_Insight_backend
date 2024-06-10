import { mongoDBConnection } from "../config";
import mongoose from "mongoose";
const uri = mongoDBConnection;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export async function connectDB() {
  try {
    mongoose
      .connect(uri)
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.error("Connection error", error));
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
connectDB().catch(console.dir);
