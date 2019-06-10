'use strict';

const Team = require('./team-model');
const BaseRepository = require('./base-repository');

class TeamRepository extends BaseRepository {
  constructor() {
    super(Team);
  }
}

module.exports = new TeamRepository();
