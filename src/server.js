const express = require('express');
const body_parser = require('body-parser');
const app = express();

//port used for the app
const port = 3000;

//App is required to use /routes/index
require('./routes/index')(app);

//App listens to which port the server is on
const server = app.listen(port, () => {
	console.log('Server on', port);
});

module.exports = server;
