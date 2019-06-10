'use strict';

const players = require('../../models/players');

const supergoose = require('../supergoose');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Players Model', () => {
  let obj = {name:'John', bats:'R',throws:'R',position:'C',team:'Bunnies'};
  let player;

  it('can post() a new player', async () => {
    player = await players.post(obj);

    expect(player).toMatchObject(obj);
  });

  it('can get() the new player', async () => {
    let got = await players.get(player._id);

    expect(got).toBeInstanceOf(Array);
    expect(got[0]).toHaveProperty('_id', player._id);
    expect(got[0]).toMatchObject(obj);
  });
});
