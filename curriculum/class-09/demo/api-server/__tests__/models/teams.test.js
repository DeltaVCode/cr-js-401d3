'use strict';

const teams = require('../../models/teams');

const supergoose = require('../supergoose');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Teams Model', () => {
  let obj = {name:'Bunnies'};
  let team;

  it('can post() a new team', async () => {
    team = await teams.post(obj);

    expect(team).toMatchObject(obj);
  });

  it('can get() the new team', async () => {
    let got = await teams.get(team._id);

    expect(got).toBeInstanceOf(Array);
    expect(got[0]).toHaveProperty('_id', team._id);
    expect(got[0]).toMatchObject(obj);
  });
});
