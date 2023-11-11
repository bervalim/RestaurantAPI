import { AppDataSource } from "./data-source";
import Address from "./entities/Address.entity";
import Booking from "./entities/Booking.entity";
import Category from "./entities/Category.entity";
import Client from "./entities/Client.entity";
import Restaurant from "./entities/Restaurant.entity";
import { TbookingRepo } from "./interfaces/bookings.interface";
import { TcategoryRepo } from "./interfaces/categories.interface";
import { TclientRepo } from "./interfaces/clients.interface";
import {
  TaddressRepo,
  TrestaurantRepo,
} from "./interfaces/restaurant.interface";

export const clientRepo: TclientRepo = AppDataSource.getRepository(Client);
export const categoryRepo: TcategoryRepo =
  AppDataSource.getRepository(Category);
export const addressRepo: TaddressRepo = AppDataSource.getRepository(Address);
export const restaurantRepo: TrestaurantRepo =
  AppDataSource.getRepository(Restaurant);
export const bookingRepo: TbookingRepo = AppDataSource.getRepository(Booking);
