import { z } from "zod";
import {
  clientLoginRequestSchema,
  createClientRequestSchema,
  createClientResponseSchema,
  createClientWithoutAdminSchema,
} from "../schemas/clients.schema";
import { DeepPartial, Repository } from "typeorm";
import Client from "../entities/Client.entity";

export type TcreateClientRequest = z.infer<typeof createClientRequestSchema>;

export type TcreateWithoutAdminClientRequest = z.infer<
  typeof createClientWithoutAdminSchema
>;

export type TupdateClientRequest =
  DeepPartial<TcreateWithoutAdminClientRequest>;

export type TcreateClientResponse = z.infer<typeof createClientResponseSchema>;

export type TreadClientResponse = TcreateClientResponse[];

export type TclientLoginRequest = z.infer<typeof clientLoginRequestSchema>;

export type TclientLoginResponse = { token: string };

export type TclientRepo = Repository<Client>;
