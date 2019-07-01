'use strict';

console.log('Starting my app!');

require('./network-logger');
require('./cache');

const hub = require('./hub');

var nextId = 1;
function saveToDb(document) {
  document.id = nextId++;
  // TODO: actually save...

  setTimeout(() => {
    hub.emit('save', document);
  }, 500 + Math.random() * 50);
}

// hub.on('save', console.log)

saveToDb({ name: 'Keith' });
saveToDb({ name: 'David' });
