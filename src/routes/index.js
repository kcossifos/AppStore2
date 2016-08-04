module.exports = (app) => {

  app.use('/', require('./api/v1/index'));
  app.use('/api/v1/', require('./api/v1/users'));
  app.use('/api/v1/', require('./api/v1/apps'));

}
