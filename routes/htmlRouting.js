// Dependencies
var path = require("path");

// HTML routes
module.exports = function(app) {

	// Home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/html/index.html"));
	});
}