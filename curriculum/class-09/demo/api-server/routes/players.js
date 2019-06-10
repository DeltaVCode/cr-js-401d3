'use strict';

const express = require('express');
const router = express.Router();

const players = require('../models/players');

// Route Definitions
router.get('/api/v1/players', handleGetAll);
router.post('/api/v1/players', handlePost);

router.get('/api/v1/players/:id', handleGetOne);
router.delete('/api/v1/players/:id', handleDelete);
router.put('/api/v1/players/:id', handlePut);

// Route Handlers
function handleGetAll(req, res, next) {
  players.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  players.get(id)
    .then(records => res.json(records[0]))
    .catch(next);
}

function handlePost(req, res, next) {
  players.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handlePut(req, res, next) {
  next('not implemented');
}

function handleDelete(req, res, next) {
  next('not implemented');
}

module.exports = router;
