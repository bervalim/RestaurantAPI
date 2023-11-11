import { Request, Response } from "express";
import {
  TcreateClientResponse,
  TreadClientResponse,
} from "../interfaces/clients.interface";
import {
  createClientService,
  readAllClientsService,
  softDeleteClientService,
  updateClientService,
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

export const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { findClient } = res.locals;
  const updatedClient = await updateClientService(req.body, findClient);
  return res.status(200).json(updatedClient);
};

export const softDeleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { findClient } = res.locals;
  await softDeleteClientService(findClient);
  return res.status(204).json();
};
