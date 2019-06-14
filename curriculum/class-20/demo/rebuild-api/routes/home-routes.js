'use strict';

const { Router } = require('express');

var router = new Router();

router.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

module.exports = router;
