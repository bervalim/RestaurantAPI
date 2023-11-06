import { z } from "zod";

export const clientSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50).min(3),
  email: z.string().email().max(50).min(3),
  password: z.string().max(120).min(3),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export const createClientRequestSchema = clientSchema.pick({
  name: true,
  email: true,
  password: true,
  admin: true,
});

export const createClientWithoutAdminSchema = createClientRequestSchema.omit({
  admin: true,
});

export const updateClientWithoutAdminSchema =
  createClientWithoutAdminSchema.partial();

export const createClientResponseSchema = clientSchema.omit({ password: true });

export const clientsListResponseSchema = createClientResponseSchema.array();

export const clientLoginRequestSchema = clientSchema.pick({
  email: true,
  password: true,
});
