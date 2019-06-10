'use strict';

const Player = require('./player-model');
const BaseRepository = require('./base-repository');

class PlayerRepository extends BaseRepository {
  constructor() {
    super(Player);
  }
}

module.exports = new PlayerRepository();
