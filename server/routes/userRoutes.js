import express from "express";
import { signup } from "../controller/userController.js";
import { signin } from "../controller/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
