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

  public async destroy(req: Request, res: Response): Promise<Response> {
    const user = await prisma.users.findOne({
      where: {
        id: Number(req.userId),
      },
    });

    if (!user) {
      return res.status(401).json({ error: 'Not permitted' });
    }

    await prisma.users.delete({
      where: {
        id: user?.id,
      },
    });

    return res.status(200).send();
  }
}

export default new UserController();
