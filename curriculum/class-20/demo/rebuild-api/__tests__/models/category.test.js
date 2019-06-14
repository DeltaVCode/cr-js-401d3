'use strict';

const Category = require('../../models/category');

const supergoose = require('../supergoose');
beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB); 

describe('Category', () => {
  it('can create Category', async () => {
    var cat = new Category({
      name: 'Tree Fruits',
    });

    await cat.save();

    expect(cat._id).toBeDefined();
  });
});
