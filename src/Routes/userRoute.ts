import { Router } from "express";
import {
  Login,
  Register,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../Controllers/userController";
import { IsUser } from "../Middlewares/isUser";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/getUserById/:id", IsUser, getUserById);
router.get("/getAllUser", IsUser, getAllUser);
router.put("/updateUser/:id", IsUser, updateUser);
router.delete("/deleteUser/:id", IsUser, deleteUser);

export default router;
