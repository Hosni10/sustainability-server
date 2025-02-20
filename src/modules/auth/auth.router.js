import express from "express";
import { login, signup } from "./auth.controller.js";
import { validation } from "../../middleware/validation.js";
import { loginSchema, signupSchema } from "../../validation/auth.validation.js";

const authRouter = express.Router();

authRouter.post("/signup", validation(signupSchema), signup);
authRouter.post("/login", validation(loginSchema), login);

export default authRouter;
