//Setting Two global Variables 

var secondsRemaining;
var intervalHandle;

function resetpage() {
	document.getElementById("inputArea").style.display = "block";
}


function tick() {
	// to grab the H1 Containing the timer
		var timeDisplay = document.getElementById("time");

		// turning the seconds into mm:ss
		var min = Math.floor(secondsRemaining / 60);
		var sec = secondsRemaining - (min * 60);

		//adding a leading zero ( as a string value) if seconds less than 10
		if (sec < 10) {
			sec = "0" + sec;
		}	
		//concatenating with colon

		var message = min + ":" + sec;
		//changing the display
		timeDisplay.innerHTML = message; 

		// stop if counter gets to zero
			if (secondsRemaining === 0) {
				alert("DONE");
					clearInterval(intervalHandle);
					resetpage();
			}
				// substracting from seconds remaining
				secondsRemaining--;

}

function startCountdown() {
	// getting contents of the minutes box
	var minutes = document.getElementById("minutes").value;

	// checking if input is not a number
	if (isNaN(minutes)) {
		alert("please enter a number");
		return;
	}  
	//to pick how many seconds

	secondsRemaining = minutes * 60;
	// for every second, call the tick function
	intervalHandle = setInterval(tick,1000);
	// Then Hide the form
	document.getElementById("inputArea").style.display = "none";

}



window.onload= function () {
	// creating an input text box and give it an id of "minutes"

	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id","minutes");
	inputMinutes.setAttribute("type", "text");
   
// creating a start button

var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","start Countdown");

	//creating a stop button

   var stopButton = document.createElement("input");
   		stopButton.setAttribute("type","button");
   		stopButton.setAttribute("value", "STOP");

	startButton.onclick = function () {
		startCountdown();
	}

	stopButton.onclick = function () {
		clearInterval(intervalHandle);
					resetpage();
	}

	// adding to the DOM, to the DIV called "inputArea"
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);
	document.getElementById("stopBtn").appendChild(stopButton);



}
