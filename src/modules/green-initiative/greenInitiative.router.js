import express from "express";
import {
  addInitiative,
  deleteInitiative,
  getInitiativeById,
  getInitiatives,
  updateInitiative,
} from "./greenInitiative.controller.js";
import {
  addInitiativeSchema,
  updateInitiativeSchema,
} from "../../validation/initiative.validations.js";
import { validation } from "../../middleware/validation.js";

const initiativeRouter = express.Router();

initiativeRouter.get("/getallinitiatives", getInitiatives);
initiativeRouter.get("/getinitiativebyid/:id", getInitiativeById);
initiativeRouter.post(
  "/addinitiative",
  validation(addInitiativeSchema),
  addInitiative
);
initiativeRouter.put(
  "/updateinitiative/:id",
  validation(updateInitiativeSchema),
  updateInitiative
);
initiativeRouter.delete("/deleteinitiative/:id", deleteInitiative);

export default initiativeRouter;
