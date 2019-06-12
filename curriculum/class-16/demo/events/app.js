'use strict';

console.log('Starting my app!');

require('./logger');
require('./cache');

const hub = require('./hub');

var nextId = 1;
function saveToDb(document) {
  document.id = nextId++;
  // TODO: actually save...
  hub.emit('save', document);
}

// hub.on('save', console.log)

saveToDb({ name: 'Keith' });
saveToDb({ name: 'David' });
