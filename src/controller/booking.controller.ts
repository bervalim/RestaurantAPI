import { Request, Response } from "express";
import {
  createBookingAtARestaurantService,
  readAllRestaurantBookingsService,
} from "../services/booking.service";

export const createBookingAtARestaurantController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decodedToken;
  await createBookingAtARestaurantService(req.body, sub);
  return res.status(201).json({ message: "Booking Created!" });
};

export const readAllRestaurantBookingsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const restaurant = await readAllRestaurantBookingsService(Number(id));
  return res.status(200).json(restaurant);
};
