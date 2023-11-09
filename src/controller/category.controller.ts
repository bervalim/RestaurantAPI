import { Request, Response } from "express";
import {
  createCategoryService,
  readAllCategoriesService,
  readAllRestaurantsByCategoriesService,
} from "../services/category.service";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory = await createCategoryService(req.body);
  return res.status(201).json(newCategory);
};

export const readAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories = await readAllCategoriesService();
  return res.status(200).json(categories);
};

export const readAllRestaurantsByCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const restaurantsByCategory = await readAllRestaurantsByCategoriesService(
    Number(id)
  );
  return res.status(200).json(restaurantsByCategory);
};
