// CLIENT
require('dotenv').config();

console.log(process.env.QUEUE_SERVER);

const Q = require('@nmq/q/client');

Q.publish('database', 'create', { id: 1, name: "Keith" });


