'use strict';

const { server } = require('../../../src/app.js');
const supergoose = require('../../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

const mockRequest = supergoose.server(server);

const User = require('../../../src/auth/users-model');
const Role = require('../../../src/auth/role-model');

describe('API Routes', () => {
  describe('/secrets', () => {
    it('returns 401 if not authenticated', () => {
      return mockRequest
        .get('/secrets')
        .expect(401);
    });

    it('returns 401 for user without system capability', async () => {
      var userRole = await new Role({
        role: 'user',
        capabilities: ['read'],
      }).save();

      var nonSystemUser = await new User({
        username: 'Keith',
        password: 'pw',
        role: 'user',
      }).save();

      await mockRequest
        .get('/secrets')
        // .auth('Keith', 'pw') // With Basic Auth
        .set('Authorization', `Bearer ${nonSystemUser.generateToken()}`)
        .expect(401);
    });

    var adminUser;
    it('returns 200 for user with system capability', async () => {
      var adminRole = await new Role({
        role: 'admin',
        capabilities: ['read','system'],
      }).save();

      adminUser = await new User({
        username: 'Samantha',
        password: 'princess',
        role: 'admin',
      }).save();

      await mockRequest
        .get('/secrets')
        .set('Authorization', `Bearer ${adminUser.generateToken()}`)
        .expect(200);
    });

    it('returns 404 for POST', () => {
      return mockRequest
        .post('/secrets')
        .set('Authorization', `Bearer ${adminUser.generateToken()}`)
        .expect(404);
    });
  });
});
