'use strict';

const eventHub = require('./hub');

console.log('LOGGER enabled');
eventHub.on('save', handleSave);
eventHub.on('delete', log('delete'));
eventHub.on('update', log('update'));

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);

  eventHub.emit('invalidate-cache', payload);
}

function log(eventType) {
  return payload => {
    if (typeof payload === 'undefined') return;

    console.log(eventType, payload);
  };
}

module.exports = {
  handleSave,
  log,
};
