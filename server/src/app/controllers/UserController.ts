import * as Yup from 'yup';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import Password from '@utils/Password';

const prisma = new PrismaClient();

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      whatsapp: Yup.string().required().min(11).max(11),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

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

  public async update(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      email: Yup.string().email(),
      whatsapp: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when(
          'oldPassword',
          (oldPassword: string, field: Yup.StringSchema<string>) =>
            oldPassword ? field.required() : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { email, whatsapp, password, oldPassword } = req.body;

    const user = await prisma.users.findOne({
      where: {
        id: req.userId,
      },
    });

    if (email !== user?.email) {
      const emailExists = await prisma.users.findOne({
        where: {
          email,
        },
      });

      if (emailExists) {
        return res.status(401).json({ error: 'Email already exists' });
      }
    }

    if (oldPassword !== undefined) {
      const passwordIsValid = await Password.checkHash(
        oldPassword,
        String(user?.password_hash)
      );

      if (!passwordIsValid) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      const newPasswordHash = await Password.generateHash(password);

      await prisma.users.update({
        where: {
          id: req.userId,
        },
        data: {
          email,
          whatsapp,
          password_hash: newPasswordHash,
        },
      });

      return res.json({ email, whatsapp });
    }

    await prisma.users.update({
      where: {
        id: req.userId,
      },
      data: {
        email,
        whatsapp,
      },
    });

    return res.json({ email, whatsapp });
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    await prisma.queryRaw`DELETE FROM users WHERE id = ${req.userId}`;

    return res.status(200).send();
  }
}

export default new UserController();
