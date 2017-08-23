var db = require('../models');
var Connection = require('../config/connection.js');

module.exports = function(app){

	app.post('/api/login', db.authenticate('local'), function(req, res){
	});

	app.post('/api/signup', function(req, res){
		console.log(req.body);
		db.User.create({
			username: req.body.username,
			password: req.body.password
		}).then(function(){
			res.redirect(307, 'api/login');
		}).catch(function(err){
			console.log(err);
			res.json(err);
		});
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.direct('/');
	});

	app.get('/api/user_data', function(req, res){
		if(!req.user){
			res.json({});
		} else {
			res.json({
				username: req.body.username, 
				password: req.body.password
			});
		}
	});

	app.put('/api/posts', function(req, res){
		db.Post.update(
			req.body,
			{ 
				where: {
					id: req.body.id
				}
			}).then(function(dbPost) {
				res.json(dbPost);
		});
	});
};