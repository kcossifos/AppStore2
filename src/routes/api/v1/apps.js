const app = require('../../../models/app');
const util = require('../../../../lib/util');

module.exports = (express) => {
	const router = express.Router();

//find all apps
router.get('/v1/apps', (req, res) =>{
	app.all((err) => {
		res.status(500).json(err);
		 util.debug('GET/v1/apps', req.body, 500);
	}, (data) => {
		res.status(200).json(data);
		 util.debug('GET/v1/apps', req.body, 200);
	});
});

//find one app
router.get('/v1/apps/:id', (req, res) => {
	req.body.id = req.params.id;
	app.one(req.body, (err) => {
		res.status(500).json(err);
		util.debug('GET/v1/apps/' req.body.id, req.params.id, 500);
	}, (data) =>{
		res.status(200).json(data);
		util.debug('GET/v1/apps/' + req.body.id, req.params.id, 200);
	});
});

//delete an app
router.delete('/v1/apps/:id', (req, res) => {
	req.body.id = req.params.id;
	app.remove(req.body, (err) => {
		res.status(500).json(err);
		util.debug('DELETE/v1/apps/' + req.body.id, req.params.id, 500);
	}, (data) =>{
		res.status(200).json(data);
		 util.debug('DELETE/v1/apps/' + req.body.id, req.params.id, 200);
	});
});

//update an app
router.post('/v1/apps/:id', (req, res) => {
	const bodyId = {
      id: req.params.id,
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      artAssets: req.body.artAssets,
      releaseDate: req.body.releaseDate,
    };
	app.update(req.body, (err) => {
		res.status(500).json(err);
		util.debug('POST/v1/apps/' + bodyId, 500);
	}, (data) =>{
		res.status(200).json(data);
		util.debug('POST/v1/apps/' + bodyId, 200);
	});
});

//Create an app
router.post('/v1/apps', (req, res) =>{
	app.add(req.body, (err) =>{
		res.status(500).json(err);
		util.debug('POST/v1/apps/', req.body, 500);
	}, (data) => {
		res.status(200).json(data);
		util.debug('POST/v1/apps/', req.body, 200);
	});
});

return router;
}
