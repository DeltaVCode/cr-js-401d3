'use strict';

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  juicy: { type: Boolean, required: true, default: false },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'categories'
  },
});

const Fruit = mongoose.model('fruits', fruitSchema);

module.exports = Fruit;
