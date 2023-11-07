import { z } from "zod";

export const createBookingResponseSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  bookingCode: z.string(),
  clientId: z.number().positive().int(),
  restaurantId: z.number().positive().int(),
});

export const createBookingRequestSchema = createBookingResponseSchema.omit({
  id: true,
  bookingCode: true,
  clientId: true,
});
