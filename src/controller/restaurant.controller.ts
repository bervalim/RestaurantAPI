import { Request, Response } from "express";
import { createRestaurantService } from "../services/restaurant.service";

export const createRestaurantController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newRestaurant = createRestaurantService(req.body);
  return res.status(201).json(newRestaurant);
};
