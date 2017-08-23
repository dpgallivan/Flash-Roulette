var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Roulette = sequelize.define('roulette_db', {
	totalcash: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	}, 
});

// Roulette.sync();
// 	sequelize.authenticate().then(function(){
// 		console.log('Connection has been established')
// 	}).catch(function(err){
// 		console.log('Unable to connect to the database', err)
// 	});

module.exports = Roulette;