import { z } from "zod";
import {
  createRestaurantRequestSchema,
  createRestaurantResponseSchema,
} from "../schemas/restaurants.schema";
import { Repository } from "typeorm";
import Restaurant from "../entities/Restaurant.entity";
import Address from "../entities/Address.entity";

export type TcreateRestaurantResponse = z.infer<
  typeof createRestaurantResponseSchema
>;
export type TcreateRestauranteRequest = z.infer<
  typeof createRestaurantRequestSchema
>;
export type TrestaurantRepo = Repository<Restaurant>;
export type TaddressRepo = Repository<Address>;
