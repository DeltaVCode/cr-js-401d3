'use strict';

const app = require('../../lib/app');
const supergoose = require('../supergoose');

const mockRequest = supergoose.server(app);

describe('app', () => {
  it('returns 404 for missing path', () => {
    mockRequest
      .get('/404')
      .expect(404);
  });
});
