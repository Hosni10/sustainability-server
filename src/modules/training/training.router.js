import express from "express";
import {
  addTraining,
  deleteTraining,
  getAllTrainings,
  getTrainingById,
  updateTraining,
} from "./training.controller.js";
import { validation } from "../../middleware/validation.js";
import { addTrainingSchema, updateTrainingSchema } from "../../validation/training.validation.js";

const trainingRouter = express.Router();

trainingRouter.get("/getalltrainings", getAllTrainings);
trainingRouter.post("/addtraining", validation(addTrainingSchema), addTraining);
trainingRouter.get("/gettrainingbyid/:id", getTrainingById);
trainingRouter.put(
  "/updatetraining/:id",
  validation(updateTrainingSchema),
  updateTraining
);
trainingRouter.delete("/deletetraining/:id", deleteTraining);

export default trainingRouter;
