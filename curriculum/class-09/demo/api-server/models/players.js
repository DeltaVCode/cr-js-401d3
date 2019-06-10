'use strict';

const Player = require('./player-model');

class PlayerRepository {
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return Player.find(queryObject);
  }

  post(record) {
    let newRecord = new Player(record);
    return newRecord.save();
  }

  put(id, entry) {
    return Promise.reject('not implemented');
  }

  delete(id) {
    return Promise.reject('not implemented');
  }
}

module.exports = new PlayerRepository();
