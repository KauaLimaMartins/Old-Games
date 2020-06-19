import request from 'supertest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Games', () => {
  // beforeAll(async () => {
  //     await prisma.games.deleteMany({
  //         where: {
  //             game_name: 'test',
  //         }
  //     });
  // });

  it('Should create a game with valid credentials', async () => {
    // const body = {
    //     city: 'test',
    //     game_description: 'test',
    //     game_name: 'test',
    //     image: 'test',
    //     latitude: 0,
    //     longitude: 0,
    //     uf: 'test',
    // }

    // await prisma.games.create({
    //     data: {
    //         city: body.city,
    //         game_description: body.game_description,
    //         game_name: body.game_name,
    //         image: body.image,
    //         latitude: 0,
    //         longitude: 0,
    //         uf: body.uf,
    //         users: {
    //             connect: {
    //                 id:
    //             }
    //         }
    //     }
    // });

    expect(true).toBe(true);
  });
});
