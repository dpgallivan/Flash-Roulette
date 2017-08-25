var spinner = [
	{
		value:"00",
		color:"green"
	},

	{
		value:"0",
		color:"green"
	}
];

const Red = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const Black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

for (var i = 1; i<=36; i++) {

	spinner.push({
		value: i,
		color: whichColor(i),
		EO: EvenOrOdd(i),
		half: whichHalf(i),
		row: whichRow(i),
		twelve: whichTwelve(i)
	});
}

const Roulette = {
	values:spinner,
	spin: function() {
		var rand = Math.floor(Math.random()*(this.values.length));
		// console.log(spinner[rand]);
		return spinner[rand].value;
	}
};

// console.log(Roulette.spin());

// console.log(Spinner);

// var rand = Math.floor(Math.random()*spinner.length);

// console.log(spinner[rand]);

// console.log(Roulette);

function whichTwelve(num) {
	if (num > 0 && num <=12) {
		return "1st";
	}

	else if (num > 12 && num <=24 ) {
		return "2nd";
	}

	return "3rd";
};

function whichRow(num) {
	if (num%3 === 0) {
		return 3;
	}

	if (num%3 === 2) {
		return 2;
	}

	return 1;
}

function whichHalf(num) {
	if (num <= 18) {
		return "front";
	}

	return "back";

}

function whichColor(num) {

	if (Red.includes(i)) {
		return "red";
	}

	else {
		return "black";
	}	
}

function EvenOrOdd(num) {
	if (num%2 === 0) {
		return "even";
	}

	return "odd";
}

module.exports = Roulette;

