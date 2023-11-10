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
import { verifyRestaurantAddressIsUnique } from "../middlewares/restaurant.middleware";

export const restaurantRouter: Router = Router();
restaurantRouter.post(
  "/",
  verifyToken,
  verifyAdmin,
  validateBody(createRestaurantRequestSchema),
  verifyRestaurantAddressIsUnique,
  createRestaurantController
);
restaurantRouter.get("/", readAllRestaurantsController);
