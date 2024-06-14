import { addUser, deleteUsers, getUser } from "../controllers/users";
import { Router } from "express";

const router = Router();

router.get("/getUser", getUser);

router.post("/addUser", addUser);
router.delete("/deleteUsers", deleteUsers);
export default router;
