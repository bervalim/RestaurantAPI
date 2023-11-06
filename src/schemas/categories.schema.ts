import { z } from "zod";

export const createCategoryResponseSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50).min(3),
});

export const createCategoryRequestSchema = createCategoryResponseSchema.omit({
  id: true,
});

export const readAllCategoriesSchema = createCategoryResponseSchema.array();
