import { Router } from "express";
import {
  createBookingAtARestaurantController,
  readAllRestaurantBookingsController,
} from "../controller/booking.controller";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { createBookingRequestSchema } from "../schemas/bookings.schema";
import {
  verifyIfClientBookingRestaurantExists,
  verifyRestaurantExists,
} from "../middlewares/booking.middleware";

export const bookingRouter: Router = Router();
bookingRouter.post(
  "/",
  verifyToken,
  validateBody(createBookingRequestSchema),
  verifyRestaurantExists,
  verifyIfClientBookingRestaurantExists,
  createBookingAtARestaurantController
);
bookingRouter.get(
  "/restaurant/:id",
  verifyToken,
  verifyAdmin,
  readAllRestaurantBookingsController
);
