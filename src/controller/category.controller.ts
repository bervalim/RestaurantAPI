import { Request, Response } from "express";
import { createCategoryService } from "../services/category.service";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory = await createCategoryService(req.body);
  return res.status(201).json(newCategory);
};
