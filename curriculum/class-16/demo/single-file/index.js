'use strict';

const EventEmitter = require('events');

const eventHub = new EventEmitter();

eventHub.emit('ignored', 'no one will see this!');
eventHub.on('ignored', (payload) => {
  console.log('this will not receive the above event', payload);
});

eventHub.on('save', handleSave);
eventHub.on('delete', log('delete'));
eventHub.on('update', log('update'));
eventHub.on('invalidate-cache', () => {console.log('clearing cache!');});

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);

  eventHub.emit('invalidate-cache', payload);
}

function log(eventType) {
  return payload => {
    console.log(eventType, payload);
  };
}

console.log('events!');

eventHub.emit('save', { id: 'pi' });
eventHub.emit('delete', { id: 'pi' });
eventHub.emit('update', { id: 'e', name: 'Keith' });
