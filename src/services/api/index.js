const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../../`);
addPath(__dirname);

const config = require('config')();
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const winston = require('winston');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
} else {
  app.use(compression());
}
app.use(bodyParser.json());
routes(app);
app.listen(config.api.port, () => {
  winston.info('listen on port', config.api.port);
});
