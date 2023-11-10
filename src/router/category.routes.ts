import { Router } from "express";
import {
  createCategoryController,
  readAllCategoriesController,
  readAllRestaurantsByCategoriesController,
} from "../controller/category.controller";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createCategoryRequestSchema } from "../schemas/categories.schema";
import {
  verifyCategoryNameIsUnique,
  verifyIfCategoryExists,
} from "../middlewares/category.middleware";

export const categoryRouter: Router = Router();
categoryRouter.post(
  "/",
  validateBody(createCategoryRequestSchema),
  verifyToken,
  verifyAdmin,
  verifyCategoryNameIsUnique,
  createCategoryController
);
categoryRouter.get("/", readAllCategoriesController);
categoryRouter.get(
  "/:id/restaurant",
  verifyIfCategoryExists,
  readAllRestaurantsByCategoriesController
);
