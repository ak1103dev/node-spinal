const { addPath } = require('app-module-path');
addPath(`${__dirname}/../../..`);

const config = require('config')();

const { Node } = require('spinal');
const node = new Node(config.spinal.url, {
  namespace: 'home'
});

node.provide('hello', (req, res) => {
    res.send('hello world');
})

node.start();

