module.exports = () => {
  return {
    api: {
      port: 3000
    },
    spinal: {
      url: 'spinal://127.0.0.1:7557',
      port: 7557
    },
    mongodb: {
      url: 'mongodb://localhost:27017/test_db'
    }
  };
};
