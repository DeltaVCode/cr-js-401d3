'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Custom Middleware
const errorHandler = require('../middleware/500.js');
const notFoundHandler = require('../middleware/404.js');

// Custom Routes
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('./public'));

// Actual Routes
// app.use(require('../routes/players.js'));
// app.use(require('../routes/teams.js'));
// Bind _any_ API model
app.use(require('../routes/api.js'));

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

