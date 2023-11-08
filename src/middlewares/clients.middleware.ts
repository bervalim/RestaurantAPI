import { NextFunction, Request, Response } from "express";
import { clientRepo } from "../repositories";
import AppError from "../errors/App.error";
import Client from "../entities/Client.entity";

export const verifyClientEmailIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  const findClientEmail: Client | null = await clientRepo.findOneBy({
    email: email,
  });

  if (!!findClientEmail)
    throw new AppError("This client email already exists", 409);

  return next();
};
