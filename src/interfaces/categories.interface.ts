import { z } from "zod";
import {
  createCategoryRequestSchema,
  createCategoryResponseSchema,
  readAllCategoriesSchema,
} from "../schemas/categories.schema";
import { Repository } from "typeorm";
import Category from "../entities/Category.entity";

export type TcategoryResponse = z.infer<typeof createCategoryResponseSchema>;
export type TcategoryRequest = z.infer<typeof createCategoryRequestSchema>;
export type TreadAllCategories = z.infer<typeof readAllCategoriesSchema>;
export type TcategoryRepo = Repository<Category>;
