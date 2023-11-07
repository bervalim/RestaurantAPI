import { z } from "zod";
import {
  createBookingRequestSchema,
  createBookingResponseSchema,
} from "../schemas/bookings.schema";
import { Repository } from "typeorm";
import Booking from "../entities/Booking.entity";

export type TcreateBookingResponse = z.infer<
  typeof createBookingResponseSchema
>;
export type TcreateBookingRequest = z.infer<typeof createBookingRequestSchema>;
export type TbookingRepo = Repository<Booking>;
