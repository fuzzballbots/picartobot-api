const __ = require('lodash');

const net = require('net');

const server = new net.createServer((socket) => {
  socket.pipe(socket);
  socket.on('data', (data) => {
    console.log(data.toString('UTF8'));
  });
});

//server.listen(28777, '::0');
server.listen(5100, '127.0.0.1');
server.listen(5075, '127.0.0.1');
