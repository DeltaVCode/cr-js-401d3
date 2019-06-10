'use strict';

const express = require('express');
const router = express.Router();

const teams = require('../models/teams');

// Route Definitions
router.get('/api/v1/teams', handleGetAll);
router.post('/api/v1/teams', handlePost);

router.get('/api/v1/teams/:id', handleGetOne);
router.delete('/api/v1/teams/:id', handleDelete);
router.put('/api/v1/teams/:id', handlePut);

// Route Handlers
function handleGetAll(req, res, next) {
  teams.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  teams.get(id)
    .then(records => res.json(records[0]))
    .catch(next);
}

function handlePost(req, res, next) {
  teams.post(req.body)
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
