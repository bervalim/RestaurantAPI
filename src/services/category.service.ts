import Category from "../entities/Category.entity";
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
