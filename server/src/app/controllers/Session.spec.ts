import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import app from '../../app';
import Password from '../../utils/Password';

const prisma = new PrismaClient();

describe('Authenticate', () => {
  beforeAll(async () => {
    await prisma.users.deleteMany({
      where: {
        name: 'test',
      },
    });
  });

  test('Should athenticate with valid credentials', async () => {
    const body = {
      email: 'test@test.com',
      password: '123',
    };

    const hash = await Password.generateHash(body.password);

    await prisma.users.create({
      data: {
        name: 'test',
        email: body.email,
        whatsapp: '129319',
        password_hash: hash,
      },
    });

    const response = await request(app).post('/sessions').send(body);

    expect(response.status).toBe(200);
  });

  test('Should not authenticate with invalid credentials', async () => {
    const body = {
      email: 'test2@test.com',
      password: '1823891892',
    };

    const hash = await Password.generateHash('passworrrdd');

    await prisma.users.create({
      data: {
        name: 'test',
        email: 'tes@tes.com',
        whatsapp: '1197654',
        password_hash: hash,
      },
    });

    const response = await request(app).post('/sessions').send(body);

    expect(response.status).toBe(401);
  });

  test('Should return jwt token when authenticated', async () => {
    const body = {
      email: 'test3@test.com',
      password: '1823891892',
    };

    const hash = await Password.generateHash(body.password);

    await prisma.users.create({
      data: {
        name: 'test',
        email: 'test3@test.com',
        whatsapp: '119922',
        password_hash: hash,
      },
    });

    const response = await request(app).post('/sessions').send(body);

    expect(response.body).toHaveProperty('token');
  });
});
