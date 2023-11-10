import { Router } from "express";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createRestaurantRequestSchema } from "../schemas/restaurants.schema";
import {
  createRestaurantController,
  readAllRestaurantsController,
} from "../controller/restaurant.controller";

export const restaurantRouter: Router = Router();
restaurantRouter.post(
  "/",
  validateBody(createRestaurantRequestSchema),
  verifyToken,
  verifyAdmin,
  createRestaurantController
);
restaurantRouter.get("/", readAllRestaurantsController);
