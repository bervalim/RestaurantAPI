import { NextFunction, Request, Response } from "express";
import Address from "../entities/Address.entity";
import { addressRepo } from "../repositories";
import AppError from "../errors/App.error";

export const verifyRestaurantAddressIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;

  const addressExists: Address | null = await addressRepo.findOne({
    where: {
      street: address.street,
      ZIP: address.ZIP,
      city: address.city,
      number: address.number,
      state: address.state,
      neighborhood: address.neighborhood,
    },
  });

  if (!!addressExists)
    throw new AppError("This Restaurant Address already exists!", 409);

  return next();
};
