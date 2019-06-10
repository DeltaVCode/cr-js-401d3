'use strict';

const { server } = require('../../lib/server');
const supergoose = require('../supergoose');
const mockRequest = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Team Routes', () => {
  let obj = {name:'Bunnies'};
  let team = {};

  describe('GET /api/v1/teams', () => {
    it('returns 200 with empty result', async () => {
      await mockRequest
        .get('/api/v1/teams')
        .expect(200)
        .expect({
          count: 0,
          results: [],
        });
    });
  });

  describe.skip('GET /api/v1/teams/:id', () => {
    it('returns 404 with invalid team id', async () => {
      await mockRequest
        .get(`/api/v1/teams/oops`)
        .expect(404);
    });

    it('returns 404 with missing team id', async () => {
      await mockRequest
        .get(`/api/v1/teams/deadbeefdeadbeefdeadbeef`)
        .expect(404);
    });
  });

  describe('POST /api/v1/teams', () => {
    it.skip('returns 400 for invalid body', async () => {
      await mockRequest
        .post('/api/v1/teams')
        .send({})
        .expect(400);
    });

    it('returns 200 for valid body', async () => {
      team = await mockRequest
        .post('/api/v1/teams')
        .send(obj)
        .expect(200)
        .then(res => res.body);

      expect(team).toBeDefined();
      expect(team).toMatchObject(obj);
    });
  });


  describe('GET /api/v1/teams', () => {
    it('returns 200 with new team', async () => {
      await mockRequest
        .get('/api/v1/teams')
        .expect(200)
        .expect({
          count: 1,
          results: [team],
        });
    });
  });

  describe('GET /api/v1/teams/:id', () => {
    it('returns 200 with new team id', async () => {
      await mockRequest
        .get(`/api/v1/teams/${team._id}`)
        .expect(200)
        .expect(team);
    });
  });
});
