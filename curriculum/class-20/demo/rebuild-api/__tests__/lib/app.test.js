'use strict';

const app = require('../../lib/app');
const supergoose = require('../supergoose');

const mockRequest = supergoose.server(app);

describe('app', () => {
  it('returns 404 for missing path', () => {
    return mockRequest
      .get('/404')
      .expect(404);
  });

  it('returns 200 for home page', () => {
    return mockRequest
      .get('/')
      .expect(200);
  });
});
