'use strict';

const { server } = require('../../../src/app.js');
const supergoose = require('../../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

const mockRequest = supergoose.server(server);

const User = require('../../../src/auth/users-model');
const Role = require('../../../src/auth/role-model');

var users = {
  user: new User({ username: 'bob', password: 'BOB', role: 'user' }),
  editor: new User({ username: 'karen', password: 'BOB', role: 'editor' }),
  admin: new User({ username: 'alice', password: 'KAREN', role: 'admin' }),
};
var roles = [
  { role: 'user', capabilities: ['r'] },
  { role: 'editor', capabilities: ['r','u','c'] },
  { role: 'admin', capabilities: ['r','u','c','d','system'] },
]

beforeAll(async () => {
  await Promise.all(Object.values(users).map(user => user.save()));
  await Promise.all(roles.map(role => new Role(role).save()));
})

describe('API Routes', () => {
  describe('/secrets', () => {
    it('returns 401 if not authenticated', () => {
      return mockRequest
        .get('/secrets')
        .expect(401);
    });

    it('returns 401 for user without system capability', async () => {
      await mockRequest
        .get('/secrets')
        .set('Authorization', `Bearer ${users.editor.generateToken()}`)
        .expect(401);
    });

    it('returns 200 for user with system capability', async () => {
      await mockRequest
        .get('/secrets')
        .set('Authorization', `Bearer ${users.admin.generateToken()}`)
        .expect(200);
    });

    it('returns 404 for POST', () => {
      return mockRequest
        .post('/secrets')
        .set('Authorization', `Bearer ${users.admin.generateToken()}`)
        .expect(404);
    });
  });
});
