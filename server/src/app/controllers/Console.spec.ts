import request from 'supertest';

import app from '@src/app';

describe('Consoles', function (): void {
  test('Should show a list of registered consoles', async function (): Promise<
    void
  > {
    const response = await request(app).get('/consoles');

    expect(response.status).toBe(200);
  });
});
