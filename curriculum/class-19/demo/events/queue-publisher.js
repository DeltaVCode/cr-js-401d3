'use strict';

const hub = require('./hub');
const Q = require('@nmq/q/client');

hub.on('save', (document) => {
  Q.publish('database', 'update', document);
});

hub.on('attack', (requestData) => {
  console.log('ATTACK!!!');
  Q.publish('network', 'attack', requestData);
});
