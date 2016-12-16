const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../..`);
addPath(`${__dirname}/../..`);

const config = require('config')();
const { Home } = require('models');

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
  const home = new Home({
    title: 'Hello World',
    num: 0
  });
  home.save()
  .then(() => res.send({ success: true }));
});

node.start();
