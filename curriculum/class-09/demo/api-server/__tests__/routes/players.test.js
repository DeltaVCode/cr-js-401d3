'use strict';

const { server } = require('../../lib/server');
const supergoose = require('../supergoose');
const mockRequest = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Player Routes', () => {
  let obj = {name:'John', bats:'R',throws:'R',position:'C',team:'Bunnies'};
  let player = {};

  describe('GET /api/v1/players', () => {
    it('returns 200 with empty result', async () => {
      await mockRequest
        .get('/api/v1/players')
        .expect(200)
        .expect({
          count: 0,
          results: [],
        });
    });
  });

  describe.skip('GET /api/v1/players/:id', () => {
    it('returns 404 with invalid player id', async () => {
      await mockRequest
        .get(`/api/v1/players/oops`)
        .expect(404);
    });

    it('returns 404 with missing player id', async () => {
      await mockRequest
        .get(`/api/v1/players/deadbeefdeadbeefdeadbeef`)
        .expect(404);
    });
  });

  describe('POST /api/v1/players', () => {
    it.skip('returns 400 for invalid body', async () => {
      await mockRequest
        .post('/api/v1/players')
        .send({})
        .expect(400);
    });

    it('returns 200 for valid body', async () => {
      player = await mockRequest
        .post('/api/v1/players')
        .send(obj)
        .expect(200)
        .then(res => res.body);

      expect(player).toBeDefined();
      expect(player).toMatchObject(obj);
    });
  });

  expect(player).toBeDefined();

  describe('GET /api/v1/players', () => {
    it('returns 200 with new player', async () => {
      await mockRequest
        .get('/api/v1/players')
        .expect(200)
        .expect({
          count: 1,
          results: [player],
        });
    });
  });

  describe('GET /api/v1/players/:id', () => {
    it('returns 200 with new player id', async () => {
      await mockRequest
        .get(`/api/v1/players/${player._id}`)
        .expect(200)
        .expect(player);
    });
  });
});
