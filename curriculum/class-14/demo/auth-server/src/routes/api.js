'use strict';

const auth = require('../auth/middleware');

const express = require('express');

const router = module.exports = new express.Router();

/**
 * This shares our secrets for system admins
 * @route GET /secrets
 * @group admin - Admin-only capabilities.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/secrets', auth('system'), (req, res) => {
  res.send('System secrets!');
});
