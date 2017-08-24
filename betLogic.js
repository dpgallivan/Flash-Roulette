var Roulette = require("./rouletteLogic");

var Bet = function(betInput,numSpun) {
	this.UserId = betInput.UserId;

	var betInputNameArr = betInput.name.split("-");
	this.type = betInputNameArr[0];

	var valuesArr = betInputNameArr[1].split("&");

	for (var i = 0; i < valuesArr.length; i++) {
		var val = valuesArr[i];
		if(parseInt(val) && val !== "0" && val !== "00" ) {
			valuesArr[i] = parseInt(val);
		}
	}

	var payout;
	switch(this.type) {
		case "straight_up":
			payout = 36;
			break;

		case "split":
			payout = 18;
			break;

		case "corner":
			payout = 9;
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
// 	name:"split-7&10",
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

	return betsArr;
}

module.exports = resolveBets;