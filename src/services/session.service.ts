import "dotenv/config";
import { compare } from "bcryptjs";
import Client from "../entities/Client.entity";
import AppError from "../errors/App.error";
import {
  TclientLoginRequest,
  TclientLoginResponse,
} from "../interfaces/clients.interface";
import { clientRepo } from "../repositories";
import { sign } from "jsonwebtoken";

export const clientLoginService = async (
  requestBody: TclientLoginRequest
): Promise<TclientLoginResponse> => {
  const { email } = requestBody;

  const { password } = requestBody;

  const findClient: Client | null = await clientRepo.findOneBy({
    email: email,
  });

  if (!findClient) throw new AppError("Invalid credentials", 401);

  const comparePasswords = await compare(password, findClient.password);

  if (comparePasswords === false)
    throw new AppError("Invalid credentials", 401);

  const token = sign(
    { email: findClient.email, admin: findClient.admin },
    process.env.SECRET_KEY!,
    { subject: findClient.id.toString(), expiresIn: process.env.EXPIRES_IN }
  );

  return { token };
};
