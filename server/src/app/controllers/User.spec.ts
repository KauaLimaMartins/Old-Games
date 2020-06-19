import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import Password from '../../utils/Password';
import app from '../../app';

const prisma = new PrismaClient();

describe('Users', () => {
  beforeAll(async () => {
    await prisma.users.deleteMany({
      where: {
        name: 'test',
      },
    });
  });

  test('Should create a user with valid credentials', async () => {
    const body = {
      name: 'test',
      email: 'userTest2@test.com.br',
      whatsapp: '1920930192',
      password: '123456',
    };

    const response = await request(app).post('/users').send(body);

    expect(response.status).toBe(200);
  });

  test('Should delete a user', async () => {
    const body = {
      email: 'test9@test.com',
      password: '1823891892',
    };

    const hash = await Password.generateHash(body.password);

    await prisma.users.create({
      data: {
        name: 'test',
        email: 'test9@test.com',
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
