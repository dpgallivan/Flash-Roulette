var Roulette = require("./rouletteLogic");

var Bet = function(betInput,numSpun) {
	this.UserId = betInput.UserId;

	var betInputNameArr = betInput.name.split("-");
	this.type = betInputNameArr[0];

	var valuesArr = betInputNameArr[1].split("&");

	for (var i = 0; i < valuesArr.length; i++) {
		var val = valuesArr[i];
		if(Number.isInteger(val) && val !== "0" && val !== "00" ) {
			valuesArr[i] = parseInt(val);
		}
	}

	var payout;
	var allValues = [];
	switch(this.type) {
		case "straight_up":
			payout = 35;
			break;

		case "split":
			payout = 17;
			break;

		case "corner":
			payout = 8;
			break;

		case "row":
			payout = 2;
			for(var i = 0; i < Roulette.values.length; i++) {
				if(valuesArr[0] == Roulette.values[i].row) {
					allValues.push(Roulette.values[i].value);
				}
			}
			valuesArr = allValues;
			break;

		case "twelve":
			payout = 2;
			for(var i = 0; i < Roulette.values.length; i++) {
				if(valuesArr[0] == Roulette.values[i].twelve) {
					allValues.push(Roulette.values[i].value);
				}
			}
			valuesArr = allValues;
			break;

		case "half":
			payout = 1;
			for(var i = 0; i < Roulette.values.length; i++) {
				if(valuesArr[0] == Roulette.values[i].half) {
					allValues.push(Roulette.values[i].value);
				}
			}
			valuesArr = allValues;
			break;

		case "EO":
			payout = 1;
			for(var i = 0; i < Roulette.values.length; i++) {
				if(valuesArr[0] == Roulette.values[i].EO) {
					allValues.push(Roulette.values[i].value);
				}
			}
			valuesArr = allValues;
			break;

		case "color":
			payout = 1;
			for(var i = 0; i < Roulette.values.length; i++) {
				if(valuesArr[0] == Roulette.values[i].color) {
					allValues.push(Roulette.values[i].value);
				}
			}
			valuesArr = allValues;
			break;

		default:
			console.log("There was an error");
			return;
			break;
	}

	if (valuesArr.includes(numSpun)) {
		this.net = betInput.amount * payout;
	}

	else {
		this.net = betInput.amount * -1;
	}

	this.values = JSON.stringify(valuesArr);
};

// var bets = [{
// 	name:"corner-1&2&4&5",
// 	amount:25,
// 	UserId:1
// },{
// 	name:"split-0&00",
// 	amount:25,
// 	UserId:1
// },{
// 	name:"straight_up-26",
// 	amount:25,
// 	UserId:1
// },{
// 	name:"row-3",
// 	amount:25,
// 	UserId:1
// },{
// 	name:"twelve-3rd",
// 	amount:25,
// 	UserId:1
// },{
// 	name:"half-back",
// 	amount:25,
// 	UserId:1
// },{
// 	name:"EO-odd",
// 	amount:25,
// 	UserId:1
// },{
// 	name:"color-black",
// 	amount:25,
// 	UserId:1
// }];

// console.log(resolveBets(bets));

function resolveBets(betsArr) {
	var spun = Roulette.spin();
	// console.log(spun);

	for (var i = 0; i<betsArr.length; i++) {
		betsArr[i] = new Bet(betsArr[i],spun);
	}

	return {betsMdl:betsArr, results: spun};
}

module.exports = resolveBets;