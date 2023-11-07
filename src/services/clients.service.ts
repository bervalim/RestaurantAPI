import Client from "../entities/Client.entity";
import {
  TcreateClientRequest,
  TcreateClientResponse,
  TreadClientResponse,
} from "../interfaces/clients.interface";
import { clientRepo } from "../repositories";
import {
  clientsListResponseSchema,
  createClientResponseSchema,
} from "../schemas/clients.schema";

export const createClientService = async (
  requestBody: TcreateClientRequest
): Promise<TcreateClientResponse> => {
  const newClient: Client = clientRepo.create(requestBody);

  await clientRepo.save(newClient);

  return createClientResponseSchema.parse(newClient);
};

export const readAllClientsService = async (): Promise<TreadClientResponse> => {
  const clients: TreadClientResponse = await clientRepo.find();
  return clientsListResponseSchema.parse(clients);
};
