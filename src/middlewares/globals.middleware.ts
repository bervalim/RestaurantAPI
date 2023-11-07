import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import AppError from "../errors/App.error";
import { verify } from "jsonwebtoken";

export const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);
    return next();
  };

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;
  // Se o token não estiver presente no headers, mande este erro
  if (!authorization) throw new AppError("Missing bearer token", 401);
  // No headers, teremos Bearer 92104eu3r4ufhaiodefhfuhfurw
  // Com esse split,faremos a separação do token do bearer e teremos acesso a ele
  const token: string = authorization.split(" ")[1];
  // Divide o valor do cabeçalho de autorização usando o espaço como delimitador e pega o segundo elemento do array resultante. Normalmente, tokens de Bearer são enviados no formato "Bearer <token>". Essa linha extrai apenas o token.
  // Decodificará o token e verificará se o usuário está logado na aplicação
  // Através desta decodificação, iremos verificar se o usuário está logado
  const decodedToken = verify(token, process.env.SECRET_KEY!);
  // Guardando o token decodificado no res.locals
  res.locals = { ...res.locals, decodedToken };

  return next();
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { admin } = res.locals.decodedToken;

  if (!admin) throw new AppError("Insuficcient Permissions", 403);

  return next();
};

export const verifyPermission = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;

  const { admin, sub } = res.locals.decodedToken;

  if (admin) return next();

  if (sub !== id) throw new AppError("Insuficcient Permissions", 403);

  return next();
};
