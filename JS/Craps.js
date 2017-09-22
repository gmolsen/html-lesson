

function diceRoll() {
				var d1 = Math.floor(Math.random() * 6)+1;
				var d2 = Math.floor(Math.random() * 6)+1;
				display("You rolled "+ (d1 + d2));
				return d1 + d2;
		}

var thePoint = 0;

function firstRoll() {
	var roll = diceRoll();
		if (roll === 7 || roll === 11) {
			display("You Win!");
		} else if (roll === 2 || roll ===3 || roll === 12) {
			display("You Lose!");
		} 
		thePoint = roll;
		display("The point is " + thePoint);
		}

function secondRoll() {
		var nRoll = diceRoll();
		while (nRoll != 7 && nRoll != thePoint) {
			nRoll = diceRoll();
		}
		if (nRoll === thePoint) {
		display("You rolled" + thePoint + ", you Win!");
		total = 0;
	} else {
		display("You rolled a 7, you Lose!");
	}
}

function display(msg) {
		var ulCtrl = document.getElementById("theMessage");
		ulCtrl.innerHTML += "<li>" + msg;
}

function clear() {
		var ulCtrl = document.getElementById("theMessage");
		ulCtrl.innerHTML = "";
}

function game() {
	firstRoll();
	if (thePoint != 0) {
		secondRoll();
		
	}
}
