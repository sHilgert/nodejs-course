var express = require("express");
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var port = process.env.PORT;

//Controllers
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConectionString());

setupController(app);
apiController(app);

app.listen(port);