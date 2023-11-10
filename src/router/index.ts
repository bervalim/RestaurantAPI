import { Router } from "express";
import { clientRouter } from "./client.routes";
import { sessionRouter } from "./session.routes";
import { categoryRouter } from "./category.routes";
import { restaurantRouter } from "./restaurant.routes";

export const allRoutes: Router = Router();
allRoutes.use("/clients", clientRouter);
allRoutes.use("/login", sessionRouter);
allRoutes.use("/categories", categoryRouter);
allRoutes.use("/restaurant", restaurantRouter);
