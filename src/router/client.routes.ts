import { Router } from "express";
import {
  createClientController,
  readAllClientsController,
} from "../controller/clients.controller";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createClientRequestSchema } from "../schemas/clients.schema";

export const clientRouter: Router = Router();

clientRouter.post(
  "/",
  validateBody(createClientRequestSchema),
  createClientController
);
clientRouter.get("/", verifyToken, verifyAdmin, readAllClientsController);
