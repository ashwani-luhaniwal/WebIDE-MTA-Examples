"use strict";

let express = require("express"),
	// client express routes
	emp = require("./routes/employee");

// create express instance
let oApp = express();

oApp.use(express.static(__dirname));
oApp.configure(function() {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

oApp.get("/employees", emp.findAll);
oApp.post("/employee", emp.addEmp);
oApp.put("/employee/:id", emp.updateEmp);
oApp.get("/employee/:id", emp.findById);
oApp.delete("/employee/:id", emp.deleteEmp);

oApp.listen(3000, function() {
	console.log("Server listening at: 3000");
});

// connect to mongodb
require("./server/db/mongo-config.js");
