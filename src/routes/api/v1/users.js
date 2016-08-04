var express = require('express');
	const router = express.Router();

  //gets all users information
  router.get('/users/', function (req , res){
    res.json({
      "users": [
        {
          "id": "1",
          "name": "Kelsey"
        },
        {
          "id": "2",
          "name": "Shrub"
        },
        {
          "id": "3",
          "name": "Kah"
        },
        {
          "id": "4",
          "name": "Kev"
        }
      ]
    });
  });

  	//gets a single user
	router.get('/users/:id',function(req,res){
		res.json({user: {id: req.params.id, name: "Kelsey" }});
	});


module.exports = router;
