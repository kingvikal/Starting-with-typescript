import { Router } from "express";
import {
  Login,
  Register,
  getAllUser,
  getUserById,
} from "../Controllers/userController";
import { IsUser } from "../Middlewares/isUser";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/getUserById/:id", IsUser, getUserById);
router.get("/getAllUser", IsUser, getAllUser);

export default router;
