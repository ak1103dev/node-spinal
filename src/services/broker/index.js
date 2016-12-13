const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../..`);

const config = require('config')();
const { Broker } = require('spinal');
const broker = new Broker();

broker.start(config.spinal.port, () => {
  console.log('Spinal:Broker listening...' + config.spinal.port);
});
