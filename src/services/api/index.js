const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../../`);
addPath(__dirname);

const config = require('config')();
const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);
app.listen(config.api.port, () => {
  console.log('listen on port', config.api.port);
});
