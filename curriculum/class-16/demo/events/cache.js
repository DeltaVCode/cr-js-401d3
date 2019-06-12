'use strict';

const eventHub = require('./hub');

eventHub.on('invalidate-cache', () => {
  // TODO: actually invalidate cache here
  console.log('clearing cache!');
});
