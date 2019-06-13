'use strict';

const net = require('net');
const uuid = require('uuid');

const PORT = process.env.PORT || 3001;
const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

let socketPool = {};

server.on('connection', socket => {
  let id = uuid();
  socket.id = id;
  socketPool[id] = socket;

  console.log(`Connection count: ${Object.keys(socketPool).length}`);

  socket.on('data', buffer => {
    console.log(id, buffer.toString().trim());
  });
  socket.on('close', () => {
    console.log(id, 'closing!');
    delete socketPool[id];
  });
});
