import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import Password from '@utils/Password';
import app from '@src/app';
import truncate from '@utils/truncate';

const prisma = new PrismaClient();

describe('Users', function (): void {
  beforeAll(async function (): Promise<void> {
    await truncate();
  });

  test('Should create a user with valid credentials', async function (): Promise<
    void
  > {
    const body = {
      name: 'test3',
      email: 'test8@test.com.br',
      whatsapp: '1920930192',
      password: '123456',
    };

    const response = await request(app).post('/users').send(body);

    expect(response.status).toBe(200);
  });

  test('Should update a user with valid credentials', async function (): Promise<
    void
  > {
    const body = {
      email: 'test7@test.com.br',
      whatsapp: '119888',
      oldPassword: '123456',
      password: '123456789',
    };

    const hash = await Password.generateHash('123456');

    // Create a user to authenticate
    await prisma.users.create({
      data: {
        name: 'test3',
        email: 'test6@test.com.br',
        whatsapp: '119999',
        password_hash: hash,
      },
    });

    const auth = await request(app).post('/sessions').send({
      email: 'test6@test.com.br',
      password: '123456',
    });

    const response = await request(app)
      .put('/users')
      .set('Authorization', 'barer ' + auth.body.token)
      .send(body);

    expect(response.status).toBe(200);
  });

  test('Should delete a user', async function (): Promise<void> {
    const body = {
      email: 'test5@test.com.br',
      password: '1823891892',
    };

    const hash = await Password.generateHash(body.password);

    await prisma.users.create({
      data: {
        name: 'test3',
        email: 'test5@test.com.br',
        whatsapp: '119922',
        password_hash: hash,
      },
    });

    const auth = await request(app).post('/sessions').send(body);

    const response = await request(app)
      .delete('/users')
      .set('Authorization', 'bearer ' + auth.body.token);

    expect(response.status).toBe(200);
  });
});
