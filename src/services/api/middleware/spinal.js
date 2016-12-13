const config = require('config')();

const { Node } = require('spinal');
const node = new Node(config.spinal.url, {
  namespace: 'api'
});

module.exports = (path) => (req, res) => {
  node.call(path, (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(data);
    return;
  });
};

node.start();
