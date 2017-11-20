"use strict";

let mongo = require("mongodb");

let Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

let server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('empdb', server);

db.open(function(err, db) {
	if (!err) {
		console.log("Connected to 'empdb' database");

		db.collection('empdata', {strict: true}, function(err, collection) {
			if (err) {
				console.log("The 'empdata' collection doesn't exist. Creating it with sample data...");
				populateDB();
			}
		});
	}
});

let populateDB = function() {
	let employee = [
		{
			id: "1",
			name: "John",
			dob: "08/06/1977",
			gender: "Male",
			designation: "Consultant"
		},
		{
			id: "2",
			name: "Robert",
			dob: "09/08/1977",
			gender: "Male",
			designation: "Sr. Consultant"
		}
	];

	db.collection('empdata', function(err, collection) {
		collection.insert(employees, {safe: true}, function(err, result) { });
	});
};