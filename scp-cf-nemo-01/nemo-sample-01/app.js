
var express = require("express");
var bodyParser = require("body-parser");
var cfenv = require("cfenv");

// create express instance
var oApp = express();

// Cloud Foundry environment variables
var oAppEnv = cfenv.getAppEnv();

// body parser middleware to handle URL parameter and JSON bodies
oApp.use(bodyParser.urlencoded({ extended: false }));
oApp.use(bodyParser.json());

// "static" resources
oApp.use(express.static(__dirname + "/webapp"));

// connect to mongodb
require("./server/db/mongo-connect.js")(oAppEnv);

// client express routes
require("./routes/routes.js")(oApp);

// api
require("./server/api/info/info.js")(oApp, oAppEnv);
require("./server/api/users/users.js")(oApp);

oApp.listen(oAppEnv.port, function() {
	console.log("Server listening at " + oAppEnv.port);
});
