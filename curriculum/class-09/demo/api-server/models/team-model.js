'use strict';

const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: { type:String, required:true },
});

const Team = mongoose.model('teams', teamSchema);
module.exports = Team;
