import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ConsoleController {
  public async index(req: Request, res: Response): Promise<Response> {
    const consoles = await prisma.consoles.findMany();

    const serializedConsoles = consoles.map((cnsl) => {
      return {
        id: cnsl.id,
        title: cnsl.title,
        image_url: `http://192.168.15.7:4000/console-image/${cnsl.image}`,
      };
    });

    return res.json(serializedConsoles);
  }
}

export default new ConsoleController();
