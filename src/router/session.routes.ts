import { Router } from "express";
import { validateBody } from "../middlewares/globals.middleware";
import { clientLoginRequestSchema } from "../schemas/clients.schema";
import { clientLoginController } from "../controller/session.controller";

export const sessionRouter: Router = Router();
sessionRouter.post(
  "/",
  validateBody(clientLoginRequestSchema),
  clientLoginController
);
