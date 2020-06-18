import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import app from '../../app';

const prisma = new PrismaClient();

describe('Consoles', () => {
  beforeAll(async () => {
    await prisma.consoles.deleteMany({
      where: {
        title: 'test',
      },
    });

    await prisma.consoles.create({
      data: {
        image: 'fake',
        title: 'test',
      },
    });
  });

  test('Should show a list of registered consoles', async () => {
    const response = await request(app).get('/consoles');

    expect(response.status).toBe(200);
  });
});
