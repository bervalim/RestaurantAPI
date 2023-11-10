import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories";
import AppError from "../errors/App.error";
import Category from "../entities/Category.entity";

export const verifyCategoryNameIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  const findCategory: Category | null = await categoryRepo.findOneBy({
    name: name,
  });

  if (!!findCategory)
    throw new AppError("This category name already exists!", 409);

  return next();
};

export const verifyIfCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const findCategory: Category | null = await categoryRepo.findOneBy({
    id: Number(id),
  });

  if (!findCategory) throw new AppError("Category not found!", 404);

  return next();
};
