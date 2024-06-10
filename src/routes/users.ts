import { addUser, getUser } from "../controllers/users";
import { Router } from "express";

const router = Router();

router.get("/getUser", getUser);
router.post("/addUser", addUser);
export default router;
