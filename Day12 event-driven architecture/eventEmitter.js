const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('ddd', (data) => {
  console.log('Message reçu :', data);
});

eventEmitter.emit('ddd', 'Bonjour meryem');
