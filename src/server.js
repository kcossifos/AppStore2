var express = require('express');
var body_parser = require('body-parser');
var app = express();

//port used for the app
var port = 3000;

//App is required to use /api
require('./routes/index')(app);

//App listens to which port the server is on
var server = app.listen(port, () => {
	console.log('Server on', port);
});

module.exports = server;
