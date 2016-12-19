const config = require('config')();
const winston = require('winston');
const pick = require('lodash/pick');

const { Node } = require('spinal');
const node = new Node(config.spinal.url, {
  namespace: 'api'
});

module.exports = (path) => (req, res) => {
  const reqObj = pick(req, ['body']);
  node.call(path, reqObj, (err, data) => {
    if (err) {
      const error = {};
      error.message = err.message;
      winston.error(path, err);
      res.status(500).send(error);
      return;
    }
    res.send(data);
    return;
  });
};

node.start();
