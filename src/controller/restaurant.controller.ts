import { Request, Response } from "express";
import {
  createRestaurantService,
  readAllRestaurantsService,
} from "../services/restaurant.service";

export const createRestaurantController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newRestaurant = await createRestaurantService(req.body);
  return res.status(201).json(newRestaurant);
};

export const readAllRestaurantsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const restaurants = await readAllRestaurantsService();
  return res.status(200).json(restaurants);
};
