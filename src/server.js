const express = require('express');
const bodyParser = require('body-parser');
const util = require('kelTool2');

const app = express();

// port used for the app
// const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
	}));

app.use('/', require('./routes')(express));

// listens to the port server
const server = app.listen(process.env.PORT || 3000, () => {
  util.debug('Express server listening on port', this.address().port, app.settings.env);
});
module.exports = server;
