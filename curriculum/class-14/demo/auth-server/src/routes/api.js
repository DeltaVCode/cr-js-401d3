'use strict';

const auth = require('../auth/middleware');

const express = require('express');

const router = module.exports = new express.Router();

router.get('/secrets', auth('system'), (req, res) => {
  res.send('System secrets!');
});
