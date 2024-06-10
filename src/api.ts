import express from "express";
const app = express();
import user from "./routes/users";

app.use("/user", user);
export default app;
