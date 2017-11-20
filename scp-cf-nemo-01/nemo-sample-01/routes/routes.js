"use strict";

let path = require('path');

module.exports = function (oApp) {
	oApp.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, '../webapp/', 'index.html'));
	});
}