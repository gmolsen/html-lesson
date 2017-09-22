			var total = 0;
			
			

			function diceRoll() {
				var displayRoll = document.getElementById("roll");
				var d1 = Math.floor(Math.random() * 6)+1;
				displayRoll.value = d1;
				return d1;
		}

			function game() {
				var displayTotal = document.getElementById("total");
				var roll = diceRoll();
				//console.log(roll);
				if (roll !== 1) {
					total += roll;
					displayTotal.value = total; 
				} else {
					displayTotal.value = total; 
					total = 0;
					}
				}

			