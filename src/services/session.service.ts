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
  // equivalente a req.body.email
  const { email } = requestBody;
  const { password } = requestBody;
  // Equivalente a SELECT * FROM clients WHERE email = req.body.email

  const findClient: Client | null = await clientRepo.findOneBy({
    email: email,
  });
  // Se não for encontrado o um email cadastrado no banco de dados que seja equivalente ao
  // passado no corpo da requisição
  if (!findClient) throw new AppError("Invalid credentials", 401);
  // Comparando se a senha passada no corpo da requisição é a mesma senha hasheada armazenada no banco de dados
  const comparePasswords = await compare(password, findClient.password);

  if (comparePasswords === false) throw new AppError("Invalid credetials", 401);
  // A assinatura do token terá o email armazenado no banco de dados
  // Também conterá se o client é admin ou não
  const token = sign(
    { email: findClient.email, admin: findClient.admin },
    process.env.SECRET_KEY!,
    { subject: findClient.id.toString(), expiresIn: process.env.EXPIRES_IN }
  );

  return { token };
};
