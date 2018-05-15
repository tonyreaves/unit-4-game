//establish the main variables
//the target number you're trying to hit
var targetNum;

//player score
var score = 0;




//win condition
if (score === targetNum) {
    alert("You win!");
  }

//lose condition
  else if (score >= targetNum) {
    alert("You lose!!");
  }