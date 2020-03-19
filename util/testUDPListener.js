const __ = require('lodash');

const dgram = require('dgram');

const socket = dgram.createSocket('udp4');
const socket2 = dgram.createSocket('udp4');
const socket3 = dgram.createSocket('udp4');

socket.on('message', (message) => {
  console.log('=== 5000 ===');
  console.log(message.toString('UTF8'));
});
socket.bind(5000);

socket2.on('message', (message) => {
  console.log('=== 5025 ===');
  console.log(message.toString('UTF8'));
});
socket2.bind(5025);

socket3.on('message', (message) => {
  console.log('=== 5100 ===');
  console.log(message.toString('UTF8'));
});
socket3.bind(5100);
