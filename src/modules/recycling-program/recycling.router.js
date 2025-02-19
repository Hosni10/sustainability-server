import express from "express";
import {
  addProgram,
  deleteProgram,
  getAllPrograms,
  getProgramById,
  updateProgram,
} from "./recycling.controller.js";
import { validation } from "../../middleware/validation.js";
import { addProgramSchema, updateProgramSchema } from "../../validation/recyclingProgram.validation.js";

const recyclingRouter = express.Router();

recyclingRouter.get("/getall", getAllPrograms);
recyclingRouter.get("/getprogram/:id", getProgramById);
recyclingRouter.post("/addprogram", validation(addProgramSchema), addProgram);
recyclingRouter.put("/updateprogram", validation(updateProgramSchema), updateProgram);
recyclingRouter.delete("/deleteprogram", deleteProgram);

export default recyclingRouter;
