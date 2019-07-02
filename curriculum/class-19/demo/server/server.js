'use strict';

const ioFactory = require('socket.io')
const io = ioFactory(3000); // Listen for HTTP

const Q = require('@nmq/q/server');
Q.start();

const dbQ = new Q('database');
dbQ.monitorEvent('create');
dbQ.monitorEvent('update');
dbQ.monitorEvent('delete');

const netQ = new Q('network');
netQ.monitorEvent('attack');

io.on('connection', socket => {
  console.log('Connected', socket.id);

  socket.on('speak', payload => {
    console.log('speaking', payload);

    socket.broadcast.emit('spoken', payload);
  });

  setTimeout(() => {
    socket.broadcast.emit('spoken', 'Welcome ' + socket.id);
  }, 2000);
});

const dbio = io.of('/database');
dbio.on('connection', socket =>
  socket.on('save', payload => {
    console.log('received save');
    socket.emit('save', payload);
  })
);
