//listener event for document
$(document).ready(function() {

//establish the main variables
//the target number you're trying to hit
var targetNum;

//player score
var gameScore = 0;

var totalScore = 0;



//win condition
if (gameScore === targetNum) {
    alert("You win!");
  }

//lose condition
  else if (gameScore >= targetNum) {
    alert("You lose!!");
  }

  //selector and click event for crystal 1
  $("#crystal1").on("click", function(){


  }
);

});