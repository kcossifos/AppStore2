const express = require('express');
const bodyParser = require('body-parser');
const util = require('kelTool2');

const app = express();

// port used for the app
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
	}));

app.use('/', require('./routes')(express));

// listens to the port server
const server = app.listen(port, () => {
  util.log('app is running on port:', port);
});

module.exports = server;
