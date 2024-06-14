import { Request, Response } from "express";
import { Schema, model } from "mongoose";

const likeSchema = new Schema({
  user_name: String,
  password: String,
  email: String,
});
const Users = model("users", likeSchema);

export const getUser = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.query;
    if (name && password) {
      const result = await Users.find({ user_name: name, password });
      if (result.length > 0) {
        res.send(result[0]).status(200).end();
      } else {
        res.send("המשתמש אינו נמצא").status(422).end();
      }
    } else {
      res.send("אחת מהשדות חסרה אנא השלם").status(422).end();
    }
  } catch (error) {
    res.status(500).send({ error }).end();
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const {
      query: { name, password, email },
    } = req;
    const checkExit = await Users.find({ user_name: name, email });
    if (checkExit.length === 0) {
      const add = new Users({
        password,
        user_name: name,
        email,
      });
      await add.save().then(async () => {
        const result = await Users.find({ user_name: name, password });
        res.send(result[0]).status(204).end();
      });
    } else {
      res.status(400).json("המשתמש קיים").end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error }).end();
  }
};
export const deleteUsers = async (_req: Request, res: Response) => {
  try {
    await Users.deleteMany({ email: "Amitiy36@gmail.com" });
    res.status(202).end();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error }).end();
  }
};
