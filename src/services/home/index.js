const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../..`);
addPath(`${__dirname}/../..`);

const config = require('config')();
const { Home } = require('models');
const isEmpty = require('lodash/isEmpty');

const { Node } = require('spinal');
const node = new Node(config.spinal.url, {
  namespace: 'home'
});

node.provide('hello', (req, res) => {
  Home.find()
  .then((data) => res.send(data))
  .catch((e) => res.error(e));
});

node.provide('postData', (req, res) => {
  if (isEmpty(req.body)) {
    res.error(new Error('not send empty object'));
  } else {
    const home = new Home(req.body);
    home.save()
    .then(() => res.send({ success: true }))
    .catch((e) => res.error(e));
  }
});

node.start();
