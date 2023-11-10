import { Router } from "express";
import {
  createCategoryController,
  readAllCategoriesController,
  readAllRestaurantsByCategoriesController,
} from "../controller/category.controller";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";

export const categoryRouter: Router = Router();
categoryRouter.post("/", verifyToken, verifyAdmin, createCategoryController);
categoryRouter.get("/", readAllCategoriesController);
categoryRouter.get("/:id/restaurant", readAllRestaurantsByCategoriesController);
