import { Router } from "express";
import {
  createClientController,
  readAllClientsController,
  softDeleteClientController,
  updateClientController,
} from "../controller/clients.controller";
import {
  validateBody,
  verifyAdmin,
  verifyPermission,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  createClientRequestSchema,
  updateClientWithoutAdminSchema,
} from "../schemas/clients.schema";
import {
  verifyClientEmailIsUnique,
  verifyClientIdExists,
} from "../middlewares/clients.middleware";

export const clientRouter: Router = Router();

clientRouter.post(
  "/",
  validateBody(createClientRequestSchema),
  verifyClientEmailIsUnique,
  createClientController
);
clientRouter.get("/", verifyToken, verifyAdmin, readAllClientsController);
clientRouter.patch(
  "/:id",
  validateBody(updateClientWithoutAdminSchema),
  verifyToken,
  verifyClientIdExists,
  verifyPermission,
  updateClientController
);
clientRouter.delete(
  "/:id",
  verifyToken,
  verifyClientIdExists,
  verifyPermission,
  softDeleteClientController
);
