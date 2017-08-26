var db = require('../models');
var resolveBets = require("../betLogic.js");

module.exports = function(app){

	app.get("/roulette/:id", function(req,res) {
		db.User.findOne({
			where:{
				id:req.params.id
			},
			include: [db.Bet]
		}).then(function(data) {
			// console.log(data);

			if(!data) {
				res.redirect("/");
			}

			var handleBarObj = {
				user: data
			};
			res.render("roulette",handleBarObj);
		});
	});

	app.get("/roulette_statistics", function(req,res) {
		db.Roulette_Spin.findAll({}).then(function(data) {

			var handleBarObj = {
				SpinResults: data
			};

			res.render("stats",handleBarObj);
		});
	});

	app.post('/api/signup', function(req, res){
		// console.log(req.body);

		db.User.findOne({
			where:{
				user_name:req.body.user_name
			}
		}).then(function(data){
			// console.log(data);

			if(data) {
				res.end();
			}

			else {
				db.User.create(req.body).then(function(data) {
					// console.log(data.dataValues.id);
					res.send({userId:data.id});
				});
			}
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
		var spinResult = resolveObj.results;
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
				console.log(spinResult);

				db.Roulette_Spin.create({value:spinResult.value,color:spinResult.color}).then(function() {
					res.end();
				});
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
		// console.log(req.body);
		db.User.findOne({ where: {user_name: req.body.userLogin, password:req.body.userPassword}}).then(function(data) {

			if(!data) {
				// console.log(data);
				res.end();
			}

			else {
				res.send({userId:data.id});
			}
		});
	});
};
