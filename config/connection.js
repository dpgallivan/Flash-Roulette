var Sequelize = require('sequelize');
var sequelize = new Sequelize('roulette_db', 'root', 'Captof#6', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});
module.exports = sequelize;

































// var mysql = require('mysql');

// var connection = mysql.createConnection ({
// 		host: 'localhost', 
// 		user: 'root',
// 		password: 'Captof#6',
// 		database: 'roulette_db'
// });

// connection.connect(function(err){
// 	if(err){
// 		console.log('error connecting: ' + err.stack);
// 		return;
// 	}
// 	console.log('Connected as id: ' + connection.threadId);
// });

// connection.query('SELECT * FROM Users_table', function(res,req){
// 	console.log(res);
// });

// process.on('uncaughtException', function(err){
// 	console.log(err);
// });

// module.exports= connection;
