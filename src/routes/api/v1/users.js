const user = require('../../../models/user');
const util = require('../../../../lib/util');

module.exports = (express) => {
	const router = express.Router();

//deletes a user
router.delete('/v1/users/:id', (req, res) => {
	req.body.id = req.params.id;
	user.dre(req.body, (err) => {
		res.status(500).json(err);
		util.debug('DELETE/v1/users/' + req.body.id, req.params.id, 500);
	}, (data) =>{
		res.status(200).json(data);
		util.debug('DELETE/v1/users/' + req.body.id, req.params.id, 200);
	});
});

//Creates a user
router.post('/v1/users', (req, res) =>{
	user.add(req.body, (err) =>{
		res.status(500).json(err);
		util.debug('POST/v1/users', req.body, 500);
	}, (data) => {
		res.status(200).json(data);
		util.debug('POST/v1/users', req.body, 200);
	})
});

// Gets all users
	router.get('/v1/users', (req,res) => {
		user.all((err) => {
			res.status(500).json(err);
			 util.debug('GET/v1/users', req.body, 500);
		}, (data) => {
			res.status(200).json(data);
			util.debug('GET/v1/users', req.body, 200);
		})
	});

// Gets a user by id
	router.get('/v1/users/:id', (req,res) => {
		req.body.id = req.params.id;
		user.one(req.body, (err) => {
			res.status(500).json(err);
			util.debug('GET/v1/users/' + req.body.id, req.params.id, 500);
		}, (data) => {
			res.status(200).json(data);
			util.debug('GET/v1/users/' + req.body.id, req.params.id, 200);
		})
	});

// Updates a user
	router.post('/v1/users/:id', (req, res) => {
		req.body.id = req.params.id;
		user.update(req.body, (err) => {
			res.status(500).json(err);
			util.debug('POST/v1/users' + req.body.id, req.params.id, 500);
		}, (data) =>{
			res.status(200).json(data);
			util.debug('POST/v1/users' + req.body.id, req.params.id, 200);
		})
	});

//Gets the relationship between the user id  and their apps
	router.get('/v1/users/:id/apps', (req,res) => {
		req.body.id = req.params.id;
	 user.one(req.body, (err) => {
		 res.status(500).json(err);
		 util.debug('GET/v1/users/:id/apps' + req.body.id, req.params.id, 500);
	 }, (data) => {
		 res.status(200).json(data.apps);
		 util.debug('GET/v1/users/:id/apps' + req.body.id, req.params.id, 200);
	 });
	});

	return router;
}
