import { AppDataSource } from "./data-source";
import Client from "./entities/Client.entity";
import { TclientRepo } from "./interfaces/clients.interface";

export const clientRepo: TclientRepo = AppDataSource.getRepository(Client);
