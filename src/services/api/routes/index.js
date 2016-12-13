const homeRouter = require('./home');

module.exports = (app) => {
  app.use('/home', homeRouter);
};
