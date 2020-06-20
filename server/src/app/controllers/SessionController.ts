import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import Password from '@utils/Password';
import authConfig from '@configs/auth';

const prisma = new PrismaClient();

class SessionController {
  public async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

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
