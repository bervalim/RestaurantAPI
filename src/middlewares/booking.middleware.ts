import { NextFunction, Request, Response } from "express";
import Restaurant from "../entities/Restaurant.entity";
import { restaurantRepo } from "../repositories";
import AppError from "../errors/App.error";

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
