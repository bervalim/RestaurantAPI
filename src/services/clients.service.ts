import Client from "../entities/Client.entity";
import {
  TcreateClientRequest,
  TcreateClientResponse,
} from "../interfaces/clients.interface";
import { clientRepo } from "../repositories";
import { createClientResponseSchema } from "../schemas/clients.schema";

export const createClientService = async (
  requestBody: TcreateClientRequest
): Promise<TcreateClientResponse> => {
  const newClient: Client = clientRepo.create(requestBody);

  await clientRepo.save(newClient);

  return createClientResponseSchema.parse(newClient);
};
