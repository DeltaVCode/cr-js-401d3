'use strict';

const net = require('net');

const PORT = process.env.PORT || 3001;
const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

server.on('connection', socket => {
  socket.on('data', buffer => {
    console.log(buffer.toString().trim());
  });
  socket.on('close', () => {
    console.log('closing!');
  });
});
