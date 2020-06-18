import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import Password from '../../utils/Password';

const prisma = new PrismaClient();

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    const { name, email, whatsapp, password } = req.body;

    const emailExists = await prisma.users.findOne({
      where: {
        email,
      },
    });

    if (emailExists) {
      return res.status(401).json({ error: 'This email already exists' });
    }

    const password_hash = await Password.generateHash(password);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        whatsapp,
        password_hash,
      },
    });

    return res.json(user.name);
  }
}

export default new UserController();
