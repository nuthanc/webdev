import request from 'supertest';
import { app } from '../../app';

it('responds with 200', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/auth/signout')
    .send({})
    .expect(200);

  // console.log(response.get('Set-Cookie'))
  expect(response.get('Set-Cookie')).toBeDefined();
});
