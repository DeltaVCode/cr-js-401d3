'use strict';

const People = require('../models/people-model');
const repository = new People();

describe('People Repository', () => {
  it('should start empty', async () => {
    var result = await repository.getAll();

    expect(result).toEqual([]);
  });

  it('can create person and then get it', async () => {
    var result = await repository.create({
      name: 'Keith'
    });

    expect(result).toBeDefined();
    expect(result.name).toBe('Keith');
    expect(result._id).toBeDefined();

    var fromDb = await repository.get(result._id);
    expect(fromDb).toBeDefined();
    expect(fromDb).toEqual(result);

    var all = await repository.getAll();
    expect(all).toEqual([ fromDb ]);
  });

  it('get returns null for missing id', async () => {
    var result = await repository.get('poop');

    expect(result).toBeNull();
  });

  it('throws ValidationError for person without name', () => {
    return expect(repository.create({ Name: 'Keith' }))
      .rejects.toThrowError();
  });
});
