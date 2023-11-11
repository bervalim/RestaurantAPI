import { NextFunction, Request, Response } from "express";
import Restaurant from "../entities/Restaurant.entity";
import { bookingRepo, restaurantRepo } from "../repositories";
import AppError from "../errors/App.error";
import Booking from "../entities/Booking.entity";

export const verifyRestaurantExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { restaurantId } = req.body;

  const restaurant: Restaurant | null = await restaurantRepo.findOneBy({
    id: Number(restaurantId),
  });

  if (!restaurant)
    throw new AppError("Restaurant not found for this reservation", 404);

  return next();
};

export const verifyIfClientBookingRestaurantExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour } = req.body;

  let { sub } = res.locals.decodedToken;

  sub = Number(sub);

  const booking: Booking | null = await bookingRepo.findOne({
    where: {
      client: sub,
      date,
      hour,
    },
  });

  if (!!booking)
    throw new AppError(
      "Client Booking At this time and date already exists",
      409
    );

  return next();
};
