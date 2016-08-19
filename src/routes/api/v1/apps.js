const app = require('../../../models/app');
const util = require('kelTool2');

module.exports = (express) => {
  const router = express.Router();

// find all apps
  router.get('/v1/apps', (req, res) => {
    app.all((err) => {
      res.status(500).json(err);
      util.debug('GET/v1/apps', req.body, 500);
    }, (data) => {
      res.status(200).json(data);
      util.debug('GET/v1/apps', req.body, 200);
    });
  });

// find one app
  router.get('/v1/apps/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
    };
    app.one(reqBody, (err) => {
      res.status(500).json(err);
      util.debug('GET/v1/apps/' + reqBody, 500);
    }, (data) => {
      res.status(200).json(data);
      util.debug('GET/v1/apps/' + reqBody, 200);
    });
  });

// delete an app
  router.delete('/v1/apps/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
    };
    app.remove(reqBody, (err) => {
      res.status(500).json(err);
      util.debug('DELETE/v1/apps/' + reqBody, 500);
    }, (data) => {
      res.status(200).json(data);
      util.debug('DELETE/v1/apps/' + reqBody, 200);
    });
  });

// update an app
  router.post('/v1/apps/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      artAssets: req.body.artAssets,
      releaseDate: req.body.releaseDate,
    };
    app.update(reqBody, (err) => {
      res.status(500).json(err);
      util.debug('POST/v1/apps/' + reqBody, 500);
    }, (data) => {
      res.status(200).json(data);
      util.debug('POST/v1/apps/' + reqBody, 200);
    });
  });

// Create an app
  router.post('/v1/apps', (req, res) => {
    app.add(req.body, (err) => {
      res.status(500).json(err);
      util.debug('POST/v1/apps/', req.body, 500);
    }, (data) => {
      res.status(200).json(data);
      util.debug('POST/v1/apps/', req.body, 200);
    });
  });

  return router;
};
