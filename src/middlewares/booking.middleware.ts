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

export const verifyIfRestaurantBookingExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour, restaurantId } = req.body;
  const booking: Booking | null = await bookingRepo.findOne({
    where: {
      restaurant: {
        id: restaurantId,
      },
      date: date,
      hour: hour,
    },
  });

  if (!!booking)
    throw new AppError(
      "Booking to this restaurant at this date and time already exists",
      409
    );

  return next();
};

// export const verify
