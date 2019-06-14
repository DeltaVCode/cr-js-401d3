'use strict';

const Category = require('../../models/category');
const Fruit = require('../../models/fruit.js');

const supergoose = require('../supergoose');
beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB); 

describe('Fruit', () => {
  it('can save maybe juicy fruit', async () => {
    let category = new Category({
      name: 'Spicy',
    });
    await category.save();

    let fruit = new Fruit({
      name: 'Pepper',
      juicy: false,
      category: category._id
    });

    await fruit.save();

    expect(fruit._id).toBeDefined();
  });

  it('can find saved fruit', async () => {
    let fruits = await Fruit.find();
    expect(fruits.length).toBe(1);
    expect(fruits[0].name).toBe('Pepper');

    fruits = await Fruit.find({ name: 'Floyd' });
    expect(fruits.length).toBe(0);
  });
});
