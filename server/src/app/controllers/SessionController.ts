import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import Password from '../../utils/Password';
import authConfig from '../../config/auth';

const prisma = new PrismaClient();

class SessionController {
  public async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await prisma.users.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({ erro: 'User not found' });
    }

    const passworExists = await Password.checkHash(
      password,
      user.password_hash
    );

    if (!passworExists) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({ user, token });
  }
}

export default new SessionController();
