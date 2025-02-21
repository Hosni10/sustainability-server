import express from "express";
import { login, signup,getUsers } from "./auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/", getUsers);

export default authRouter;
