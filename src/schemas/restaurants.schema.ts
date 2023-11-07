import { z } from "zod";

export const createRestaurantResponseSchema = z.object({
  id: z.number().positive(),
  michelinStar: z.boolean().default(false),
  name: z.string().max(50).min(3),
  priceRange: z.string().or(z.number()).default(0),
  meals: z.string().max(30).min(3),
  partnerSince: z.string(),
  updateInfo: z.string(),
  address: z.object({
    street: z.string().max(120).min(3),
    ZIP: z.string().max(8).min(8),
    city: z.string().max(50).min(3),
    number: z.number().positive().int(),
    state: z.string().max(2).min(2),
    neighborhood: z.string().max(30).min(3),
  }),
  categoryId: z.number().positive().int(),
});

export const createRestaurantRequestSchema =
  createRestaurantResponseSchema.omit({
    id: true,
    partnerSince: true,
    updateInfo: true,
  });
