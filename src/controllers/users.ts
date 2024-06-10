import { Request, Response } from "express";
import { Schema, model } from "mongoose";

const likeSchema = new Schema({
  user_name: String,
  password: String,
  email: String,
});
const Users = model("users", likeSchema);

export const getUser = async (_req: Request, res: Response) => {
  try {
    const a = await Users.find();
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const {
      query: { name, password, email },
    } = req;
    const add = new Users({
      password,
      user_name: name,
      email,
    });
    if (name) await add.save();
    else {
      res.send("אין מידע").status(304);
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error }).end();
  }
};
