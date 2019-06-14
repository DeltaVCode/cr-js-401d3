'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(require('../routes/home-routes'));

// Parse bodies after home routes that don't need them
app.use(express.json());

module.exports = app;
