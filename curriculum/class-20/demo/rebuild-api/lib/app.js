'use strict';

const express = require('express');
const app = express();

app.use(require('../routes/home-routes'));

module.exports = app;
