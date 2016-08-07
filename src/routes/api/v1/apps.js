const app = require('../../../models/app');

module.exports = (express) => {
	const router = express.Router();

//find all apps
router.get('/v1/apps', (req, res) =>{
	app.all((err) => {
		res.status(500).json(err);
	}, (data) => {
		res.status(200).json(data);
	});
});

//find one app
router.get('/v1/apps/:id', (req, res) => {
	req.body.id = req.params.id;
	app.one(req.body, (err) => {
		res.status(500).json(err);
	}, (data) =>{
		res.status(200).json(data);
	});
});

//delete an app
router.delete('/v1/apps/:id', (req, res) => {
	req.body.id = req.params.id;
	app.remove(req.body, (err) => {
		res.status(500).json(err);
	}, (data) =>{
		res.status(200).json(data);
	});
});

//update an app
router.post('/v1/apps/:id', (req, res) => {
	req.body.id = req.params.id;
	app.update(req.body, (err) => {
		res.status(500).json(err);
	}, (data) =>{
		res.status(200).json(data);
	});
});

//Create an app
router.post('/v1/apps', (req, res) =>{
	app.add(req.body, (err) =>{
		res.status(500).json(err);
	}, (data) => {
		res.status(200).json(data);
	});
});

return router;
}
