'use strict';

const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, required:true, uppercase:true, enum:['P','C','1B','2B','SS','3B','RF','LF','CF']},
  throws: { type:String, required:true, uppercase:true, enum:['R','L']},
  bats: { type:String, required:true, uppercase:true, enum:['R','L']},
  team: {type:String, required:true},
});

const Player = mongoose.model('players', playerSchema);
module.exports = Player;
