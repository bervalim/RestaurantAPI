import { AppDataSource } from "./data-source";
import Category from "./entities/Category.entity";
import Client from "./entities/Client.entity";
import { TcategoryRepo } from "./interfaces/categories.interface";
import { TclientRepo } from "./interfaces/clients.interface";

export const clientRepo: TclientRepo = AppDataSource.getRepository(Client);
export const categoryRepo: TcategoryRepo =
  AppDataSource.getRepository(Category);
