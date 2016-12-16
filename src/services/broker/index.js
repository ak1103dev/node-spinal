const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../..`);

const config = require('config')();
const winston = require('winston');

const { Broker } = require('spinal');
const broker = new Broker();

broker.start(config.spinal.port, () => {
  winston.info('Spinal:Broker listening...' + config.spinal.port);
});
