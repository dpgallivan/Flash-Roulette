// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

// Starts Express
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/htmlRouting.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.listen(PORT,function() {
//     console.log("App listening on PORT " + PORT);
// });