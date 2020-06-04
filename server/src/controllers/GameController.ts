import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GameController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { city, uf, consoleId } = req.query;

    const games = await prisma.games.findMany({
      where: {
        games_consoles: {
          some: {
            console_id: Number(consoleId),
          },
        },
        AND: [
          {
            city: String(city),
          },
          {
            uf: String(uf),
          },
        ],
      },
    });

    return res.json(games);
  }

  public async show(req: Request, res: Response): Promise<Response<JSON>> {
    const game = await prisma.games.findOne({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    const consoleTitle = await prisma.consoles.findMany({
      where: {
        games_consoles: {
          some: {
            game_id: game.id,
          },
        },
      },
      select: {
        title: true,
      },
    });

    return res.json({ game, consoleTitle });
  }

  public async store(req: Request, res: Response): Promise<Response<JSON>> {
    const {
      owner,
      email,
      whatsapp,
      game_name,
      game_description,
      latitude,
      longitude,
      city,
      uf,
      console_id,
    } = req.body;

    const game = await prisma.games.create({
      data: {
        image: 'fake_image',
        owner,
        email,
        whatsapp,
        game_name,
        game_description,
        latitude,
        longitude,
        city,
        uf,
      },
    });

    // here he tries to create the relationship
    // between the game previously registered and the console sent by the body
    try {
      await prisma.games_consoles.create({
        data: {
          consoles: {
            connect: {
              id: Number(console_id),
            },
          },
          games: {
            connect: {
              id: game.id,
            },
          },
        },
      });
    } catch (err) {
      // If it fails, it deletes the previously registered game.
      await prisma.games.delete({
        where: {
          id: game.id,
        },
      });

      return res.status(400).json({
        error:
          'An error occurred while trying to register your game, please try again',
      });
    }

    return res.json(game);
  }
}

export default new GameController();
