import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import authConfig from '../../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.secret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid Token' });
  }
};
