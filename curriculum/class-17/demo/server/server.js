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

  for (let socketId in socketPool) {
    if (socketId === id) continue;

    socketPool[socketId].write(`${id} connected!\r\n`);
  }

  socket.on('data', dataHandler);
  socket.on('close', () => {
    console.log(id, 'closing!');
    delete socketPool[id];
  });
});

// TODO: move this into a separate module
// TODO: add tests that have nothing to do with the socket
// NOTE: use call/bind/apply to specify 'this' in tests!
function dataHandler(buffer) {
  console.log(this.id, buffer.toString().trim());
}
