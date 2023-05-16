import { Router } from "express";
import { getAllTask, getTask } from "../Controllers/taskController";

const router = Router();


router.get("/getAllTask",getAllTask)
router.get("/getTask", getTask)

export default router