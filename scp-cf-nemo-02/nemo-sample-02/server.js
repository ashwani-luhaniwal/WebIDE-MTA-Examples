"use strict";

let express = require("express"),
	emp = require("./routes/employee"),
	bodyParser = require("body-parser");

// create express instance
let oApp = express();

// body parser middleware to handle URL parameter and JSON bodies
oApp.use(bodyParser.urlencoded({extended: false}));
oApp.use(bodyParser.json());	// support json encoded bodies

// "static" resources
oApp.use(express.static(__dirname + "/webapp"));

// client express routes
require("./routes/routes.js")(oApp);

// connect to mongodb
require("./server/db/mongo-config.js");

// all express routes
oApp.get("/employees", emp.findAll);
oApp.post("/employee", emp.addEmp);
oApp.put("/employee/:id", emp.updateEmp);
oApp.get("/employee/:id", emp.findById);
oApp.delete("/employee/:id", emp.deleteEmp);

oApp.listen(process.env.PORT || 3000, function() {
	console.log("Server listening at: 3000");
});


