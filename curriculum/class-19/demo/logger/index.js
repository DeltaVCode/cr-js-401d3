'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');

db.subscribe('update', (payload) => {
  console.log('DB UPDATE', payload);
});

db.subscribe('delete', (payload) => {
  console.log('DB DELETE', payload);
});

console.log(db.subscriptions());

const netQ = new Q('network');
netQ.subscribe('attack', request => {
  console.log('attack!', request);
});

console.log('netQ subs', netQ.subscriptions());
