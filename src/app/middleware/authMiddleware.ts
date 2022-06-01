import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.sendStatus(401);
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const data = jwt.verify(token, process.env.APP_SECRET!);

    const { id } = data as TokenPayload;

    request.userId = id;
    return next();
  } catch {
    return response.sendStatus(401);
  }
}
