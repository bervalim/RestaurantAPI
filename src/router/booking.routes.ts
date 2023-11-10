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

export const bookingRouter: Router = Router();
bookingRouter.post(
  "/",
  verifyToken,
  validateBody(createBookingRequestSchema),
  createBookingAtARestaurantController
);
bookingRouter.get(
  "/restaurant/:id",
  verifyToken,
  verifyAdmin,
  readAllRestaurantBookingsController
);
