const user = require('../../../models/user');

module.exports = (express) => {
	const router = express.Router();

//deletes a user
router.delete('/v1/users/:id', (req, res) => {
	req.body.id = req.params.id;
	user.remove(req.body, (err) => {
		res.status(500).json(err);
	}, (data) =>{
		res.status(200).json(data);
	});
});

//Creates a user
router.post('/v1/users', (req, res) =>{
	user.add(req.body, (err) =>{
		res.status(500).json(err);
	}, (data) => {
		res.status(200).json(data);
	})
});

// Gets all users
	router.get('/v1/users', (req,res) => {
		user.all((err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

// Gets a user by id
	router.get('/v1/users/:id', (req,res) => {
		req.body.id = req.params.id;
		user.one(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

// Updates a user
	router.post('/v1/users/:id', (req, res) => {
		req.body.id = req.params.id;
		user.update(req.body, (err) => {
			res.status(500).json(err);
		}, (data) =>{
			res.status(200).json(data);
		})
	});

//Gets the relationship between the user id  and their apps
	router.get('/v1/users/:id/apps', (req,res) => {
		req.body.id = req.params.id;
	 user.one(req.body, (err) => {
		 res.status(500).json(err);
	 }, (data) => {
		 res.status(200).json(data.apps);
	 });
	});

	return router;
}
