var express = require('express');
	const router = express.Router();
	//first page for the root
	router.get('/',function(req,res){
		res.json({hello:"world"});
	});
  
	//checks status
	router.get('/status',function(req,res){
		res.json({healthy: "true"});
	});

module.exports = router;