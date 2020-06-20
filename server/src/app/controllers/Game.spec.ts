import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import Password from '@utils/Password';
import app from '@src/app';
import truncate from '@utils/truncate';

const prisma = new PrismaClient();

describe('Games', function (): void {
  beforeAll(async function (): Promise<void> {
    await truncate();
  });

  test('Should create a game with valid credentials', async function (): Promise<
    void
  > {
    const body = {
      city: 'testCity',
      game_description: 'test',
      console_id: 70,
      game_name: 'test',
      latitude: 0,
      longitude: 0,
      uf: 'testUf',
    };

    const hash = await Password.generateHash('123456789');

    // Create a user to authenticate
    const user = await prisma.users.create({
      data: {
        name: 'test1',
        email: 'test@test.com.br',
        whatsapp: '119999',
        password_hash: hash,
      },
    });

    // Login with the account created before
    const auth = await request(app).post('/sessions').send({
      email: 'test@test.com.br',
      password: '123456789',
    });

    const response = await request(app)
      .post('/games')
      .set('Authorization', 'barer ' + auth.body.token)
      .send(body);

    expect(response.status).toBe(200);
  });

  test('Should show a list of all games', async function (): Promise<void> {
    const response = await request(app).get(
      `/games?city=testCity&uf=testUf&consoleId=70`
    );

    expect(response.status).toBe(200);
  });

  test('Should update a game of the logged user', async function (): Promise<
    void
  > {
    const body = {
      game_name: 'Forzinha',
      game_description: 'forzinha',
      image: 'fakee1',
    };

    const hash = await Password.generateHash('123456789');

    // Create a user to authenticate
    const user = await prisma.users.create({
      data: {
        name: 'test1',
        email: 'test2@test.com.br',
        whatsapp: '119999',
        password_hash: hash,
      },
    });

    // Login with the account created before
    const auth = await request(app).post('/sessions').send({
      email: 'test2@test.com.br',
      password: '123456789',
    });

    const game = await prisma.games.create({
      data: {
        city: 'test',
        uf: 'test',
        game_description: 'test',
        game_name: 'test',
        image: 'fake',
        latitude: 0,
        longitude: 0,
        users: {
          connect: {
            email: 'test@test.com.br',
          },
        },
      },
    });

    const response = await request(app)
      .put('/games')
      .set('Authorization', 'barer ' + auth.body.token)
      .query({ id: game.id })
      .send(body);

    expect(response.status).toBe(200);
  });
});
