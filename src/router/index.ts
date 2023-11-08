import { Router } from "express";
import { clientRouter } from "./client.routes";

export const allRoutes: Router = Router();
allRoutes.use("/clients", clientRouter);
