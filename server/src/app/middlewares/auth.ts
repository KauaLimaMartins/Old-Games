import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@configs/auth';

interface TokenPayload {
  id: number;
  iat: number;
  exp: number;
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Not authorizated' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.secret);

    const { id } = decoded as TokenPayload;

    req.userId = id;

    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
