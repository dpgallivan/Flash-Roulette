// var express = require('express');
// var app = express();
// var Game = require('../models/game.js');

// app.get('/', function(req, res){
//   res.redirect('/roulette');
// });

// app.get('/roulette', function(req, res) {
//   Game.all(function(data) {
//     var hbsObject = {
//       roulette: data
//     };
//     res.render('index', hbsObject);
//   });
// });

// app.post('/roulette/create', function(req, res) {
//   Game.create(req.body. /***/, function(result) {
//     console.log(result);
//     res.redirect('/');
//   });
// });

// app.put('/roulette/update', function(req, res) {
//   Game.update(req.body./***/, function(result){
//     console.log(result);
//     res.redirect('/');
//   })
// });