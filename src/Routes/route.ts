import { Router } from "express";
import { Hi, Welcome } from "../Controllers/Welcome";

const router = Router();


router.get("/welcome", Welcome)
router.get("/hi", Hi)

export default router