const { addPath } = require('app-module-path');
addPath(`${__dirname}/../..`);

const config = require('config')();
const mongoose = require('mongoose');

const Home = require('./home');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.url);

module.exports = {
  Home
};
