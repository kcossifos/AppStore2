module.exports = (express) => {
  const router = express.Router();

// checks status
  router.get('/status', (req, res) => {
    console.log('route hit', req.body);
    res.json({
      healthy: true,
    });
  });

  router.get('/', (req, res) => {
    res.json('Check out this app');
  });

// creates route
  router.use('/api/', require('./api/v1/users')(express));
  router.use('/api/', require('./api/v1/apps')(express));
  return router;
};
