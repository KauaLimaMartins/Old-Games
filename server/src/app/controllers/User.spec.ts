import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import app from '../../app';

const prisma = new PrismaClient();

describe('users', () => {
  beforeAll(async () => {
    await prisma.users.deleteMany({
      where: {
        name: 'userTest',
      },
    });
  });

  test('Should create a user with valid credentials', async () => {
    const body = {
      name: 'userTest',
      email: 'userTest@test.com.br',
      whatsapp: '1920930192',
      password: '123456',
    };

    const response = await request(app).post('/users').send(body);

    expect(response.status).toBe(200);
  });

  test('Should delete user', async () => {
    await prisma.users.create({
      data: {
        name: 'userTest',
        email: 'userTest@test.com.br',
        whatsapp: '1920930192',
        password_hash: '123456',
      },
    });

    const response = await request(app).delete('/users');
  });
});
