import { Router } from "express";
import { clientRouter } from "./client.routes";
import { sessionRouter } from "./session.routes";

export const allRoutes: Router = Router();
allRoutes.use("/clients", clientRouter);
allRoutes.use("/login", sessionRouter);
