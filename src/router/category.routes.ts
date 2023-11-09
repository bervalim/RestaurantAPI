import { Router } from "express";

export const categoryRouter: Router = Router();
categoryRouter.post("/");
categoryRouter.get("/");
categoryRouter.get("/:id/restaurant");
