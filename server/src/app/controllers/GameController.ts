import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import * as Yup from 'yup';

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

    const serializedGames = games.map((game) => {
      return {
        ...game,
        image_url: `http://192.168.15.7:4000/uploads/${game.image}`,
      };
    });

    return res.json(serializedGames);
  }

  public async show(req: Request, res: Response): Promise<Response> {
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

    const serializedGame = {
      ...game,
      image_url: `http://192.168.15.7:4000/uploads/${game.image}`,
    };

    return res.json({ game: serializedGame, consoleTitle });
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      game_name: Yup.string().required(),
      game_description: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      city: Yup.string().required(),
      uf: Yup.string().required(),
      console_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const {
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
        image: 'req.file.filename',
        game_name,
        game_description,
        latitude: Number(latitude),
        longitude: Number(longitude),
        city,
        uf,
        users: {
          connect: {
            id: req.userId,
          },
        },
      },
    });

    // here he tries to create the relationship between the game previously registered and the console sent by the body
    try {
      await prisma.games_consoles.create({
        data: {
          consoles: {
            connect: {
              id: console_id,
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

  public async update(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      game_name: Yup.string(),
      game_description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.query;

    const game = await prisma.games.findOne({
      where: {
        id: Number(id),
      },
    });

    if (game?.owner_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You can only edit games that you have registered' });
    }

    const { game_name, game_description } = req.body;

    await prisma.games.update({
      where: {
        id: Number(id),
      },
      data: {
        game_name,
        game_description,
        image: req.file !== undefined ? req.file.filename : game.image,
      },
    });

    return res.json({ game_name, game_description });
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.query;

    const game = await prisma.games.findOne({
      where: {
        id: Number(id),
      },
    });

    if (game?.owner_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You can only delete games that you have registered' });
    }

    await prisma.games.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).send();
  }
}

export default new GameController();
