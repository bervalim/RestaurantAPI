import { Request, Response } from "express";
import {
  TcreateClientResponse,
  TreadClientResponse,
} from "../interfaces/clients.interface";
import {
  createClientService,
  readAllClientsService,
} from "../services/clients.service";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newClient: TcreateClientResponse = await createClientService(req.body);
  return res.status(201).json(newClient);
};

export const readAllClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clients: TreadClientResponse = await readAllClientsService();
  return res.status(200).json(clients);
};
