var db = require('../models');
var resolveBets = require("../betLogic.js");
//var loggingIN = require("../login.js")

module.exports = function(app){

	// app.post('/api/login', db.authenticate('local'), function(req, res){
	// });

	// app.post('/api/signup', function(req, res){
	// 	console.log(req.body);
	// 	db.User.create({
	// 		username: req.body.username,
	// 		password: req.body.password
	// 	}).then(function(){
	// 		res.redirect(307, 'api/login');
	// 	}).catch(function(err){
	// 		console.log(err);
	// 		res.json(err);
	// 	});
	// });

	// app.get('/logout', function(req, res){
	// 	req.logout();
	// 	res.direct('/');
	// });

	// app.get('/api/user_data', function(req, res){
	// 	if(!req.user){
	// 		res.json({});
	// 	} else {
	// 		res.json({
	// 			username: req.body.username, 
	// 			password: req.body.password
	// 		});
	// 	}
	// });

	// app.put('/api/posts', function(req, res){
	// 	db.Post.update(
	// 		req.body,
	// 		{ 
	// 			where: {
	// 				id: req.body.id
	// 			}
	// 		}).then(function(dbPost) {
	// 			res.json(dbPost);
	// 	});
	// });

	app.get("/roulette/:id", function(req,res) {
		db.User.findById(req.params.id).then(function(data) {
			// console.log(data);
			var handleBarObj = {
				user: data
			};
			res.render("roulette",handleBarObj);
		});
	});

	app.post('/api/signup', function(req, res){
		// console.log(req.body);

		db.User.create(req.body).then(function(data) {
			// console.log(data.dataValues.id);
			res.send({userId:data.dataValues.id});
		});
	});

	app.post('/roulette/:id', function(req, res){
		// console.log(JSON.parse(req.body.data));
		var betsArr = JSON.parse(req.body.data);

		// for(var i = 0; i < betsArr.length; i++) {
		// 	console.log(betsArr[i]);
		// }

		var resolveObj = resolveBets(betsArr);
		betsArr = resolveObj.betsMdl;
		var numResult = resolveObj.results;
		// console.log(betsArr);

		db.Bet.bulkCreate(betsArr).then(function(){
			var net = 0;
			for (var i = 0; i<betsArr.length; i++) {
				net+=betsArr[i].net;
			}
			// console.log(net);

			db.User.findById(betsArr[0].UserId).then(function(user) {
				// console.log(user);
				user.increment("money",{by: net});
			}).then(function() {
				// console.log(numResult);
				res.end(); // change to res.send();
			});
		})
	});

	app.put("/add_money/:id", function(req,res) {

		// console.log(req.body);

		var userMoney = parseInt(req.body.money);
		var add = parseInt(req.body.addMoney);

		if(!add) {
			res.redirect("/roulette/" + req.params.id);
			return;
		}

		var newAmount = userMoney + add;

		db.User.update(
			{money:newAmount},

			{
				where: {
					id: req.params.id
				}
			}
		).then(function() {
			res.redirect("/roulette/" + req.params.id);
		});
	});

	app.post('/api/login', function(req, res){
		// db.findOne()
		console.log(req.body);
		// search for attributes
		db.User.findOne({ where: {user_name: req.body.userLogin, password:req.body.userPassword}}).then(function(data) {
			
		console.log(data);

		res.send({userId:data.id});
		})
	})
};
