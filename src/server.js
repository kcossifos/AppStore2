const express = require('express');
const bodyParser = require('body-parser');
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
  	console.log('Server Active On', port);
});

module.exports = server;
