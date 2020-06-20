import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import app from '@src/app';
import Password from '@utils/Password';
import truncate from '@utils/truncate';

const prisma = new PrismaClient();

describe('Authenticate', function (): void {
  beforeAll(async function (): Promise<void> {
    await truncate();
  });

  test('Should athenticate with valid credentials', async function (): Promise<
    void
  > {
    const body = {
      email: 'test4@test.com.br',
      password: '1234567',
    };

    const hash = await Password.generateHash(body.password);

    await prisma.users.create({
      data: {
        name: 'test2',
        email: body.email,
        whatsapp: '129319',
        password_hash: hash,
      },
    });

    const response = await request(app).post('/sessions').send(body);

    expect(response.status).toBe(200);
  });

  test('Should not authenticate with invalid credentials', async function (): Promise<
    void
  > {
    const body = {
      email: 'test3@test.com.br',
      password: '1823891892',
    };

    const hash = await Password.generateHash('passworrrdd');

    await prisma.users.create({
      data: {
        name: 'test2',
        email: 'test3@test.com.br',
        whatsapp: '1197654',
        password_hash: hash,
      },
    });

    const response = await request(app).post('/sessions').send(body);

    expect(response.status).toBe(401);
  });

  test('Should return jwt token when authenticated', async function (): Promise<
    void
  > {
    const body = {
      email: 'test2@test.com.br',
      password: '1823891892',
    };

    const hash = await Password.generateHash(body.password);

    await prisma.users.create({
      data: {
        name: 'test2',
        email: 'test2@test.com.br',
        whatsapp: '119922',
        password_hash: hash,
      },
    });

    const response = await request(app).post('/sessions').send(body);

    expect(response.body).toHaveProperty('token');
  });
});
