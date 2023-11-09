import Category from "../entities/Category.entity";
import AppError from "../errors/App.error";
import {
  TcategoryRequest,
  TcategoryResponse,
  TreadAllCategories,
} from "../interfaces/categories.interface";
import { categoryRepo } from "../repositories";

export const createCategoryService = async (
  requestBody: TcategoryRequest
): Promise<TcategoryResponse> => {
  const newCategory: Category = await categoryRepo.save(requestBody);
  return newCategory;
};

export const readAllCategoriesService =
  async (): Promise<TreadAllCategories> => {
    const categories: Category[] = await categoryRepo.find();
    return categories;
  };

export const readAllRestaurantsByCategoriesService = async (
  id: number
): Promise<Category> => {
  const category: Category | null = await categoryRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      restaurants: true,
    },
  });

  if (!category) throw new AppError("Category not found !", 404);

  return category;
};
