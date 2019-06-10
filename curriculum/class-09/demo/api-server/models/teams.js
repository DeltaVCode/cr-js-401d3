'use strict';

const Team = require('./team-model');

class TeamRepository {
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return Team.find(queryObject);
  }

  post(record) {
    let newRecord = new Team(record);
    return newRecord.save();
  }

  put(id, entry) {
    return Promise.reject('not implemented');
  }

  delete(id) {
    return Promise.reject('not implemented');
  }
}

module.exports = new TeamRepository();
