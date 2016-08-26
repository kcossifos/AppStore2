const user = require('../../../models/user');
const util = require('kelTool2');

module.exports = (express) => {
  const router = express.Router();

// deletes a user
  router.delete('/v1/users/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
    };
    user.remove(reqBody, (err) => {
      res.status(500).json(err);
      util.log('DELETE/v1/users/' + reqBody, 500);
    }, (data) => {
      res.status(200).json(data);
      util.log('DELETE/v1/users/' + reqBody, 200);
    });
  });

// Creates a user
  router.post('/v1/users', (req, res) => {
    user.add(req.body, (err) => {
      res.status(500).json(err);
      util.log('POST/v1/users', req.body, 500);
    }, (data) => {
      res.status(200).json(data);
      util.log('POST/v1/users', req.body, 200);
    });
  });

// Gets all users
  router.get('/v1/users', (req, res) => {
    user.all((err) => {
      res.status(500).json(err);
      util.log('GET/v1/users', req.body, 500);
    }, (data) => {
      res.status(200).json(data);
      util.log('GET/v1/users', req.body, 200);
    });
  });

// Gets a user by id
  router.get('/v1/users/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
      name: req.body.name,
    };
    user.one(reqBody, (err) => {
      res.status(500).json(err);
      util.log('GET/v1/users/' + reqBody, 500);
    }, (data) => {
      res.status(200).json(data);
      util.log('GET/v1/users/' + reqBody, 200);
    });
  });

// Updates a user
  router.post('/v1/users/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
      name: req.body.name,
    };
    user.update(reqBody, (err) => {
      res.status(500).json(err);
      util.log('POST/v1/users' + reqBody, 500);
    }, (data) => {
      res.status(200).json(data);
      util.log('POST/v1/users' + reqBody, 200);
    });
  });

// Gets the relationship between the user id  and their apps
  router.get('/v1/users/:id/apps', (req, res) => {
   /* eslint-disable */
   req.body.id = req.params.id;
   /* eslint-enable */
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data.apps);
    });
  });

  return router;
};
