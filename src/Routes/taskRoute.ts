import { Router } from "express";
import {
  deleteTask,
  getAllTask,
  getTask,
  postTask,
  updateTask,
} from "../Controllers/taskController";
import { IsUser } from "../Middlewares/isUser";
import { isTeacher } from "../Middlewares/isTeacher";

const router = Router();

router.get("/getAllTask", IsUser, getAllTask);
router.get("/getTask/:id", getTask);
router.put("/updateTask/:id", isTeacher, updateTask);
router.delete("/deleteTask/:id", isTeacher, deleteTask);
router.post("/postTask", IsUser, isTeacher, postTask);

export default router;
