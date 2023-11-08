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
import { verifyClientEmailIsUnique } from "../middlewares/clients.middleware";

export const clientRouter: Router = Router();

clientRouter.post(
  "/",
  validateBody(createClientRequestSchema),
  verifyClientEmailIsUnique,
  createClientController
);
clientRouter.get("/", verifyToken, verifyAdmin, readAllClientsController);
clientRouter.patch("/:id");
clientRouter.delete("/:id");
