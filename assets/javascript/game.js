//listener event for document

$(document).ready(function() {
  new WOW().init();


//establish the main variables
//the target number you're trying to hit
var targetNum = (function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (120 - 19) + 19);
}) 

//player score
var gameScore = 0;

// total wins and losses
var wins = 0;
var losses = 0;

//array of crystal values
var crystalValues = [0,0,0,0]

var audio = "assets/images/click.mp3"

//function to add random numbers to array
function resetValues() {for (i = 0; i < crystalValues.length; i++) {(function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (10 - 1) + 1);})
}
crystalValues.push(this)
return crystalValues;
console.log(this)}

resetValues();


$("#number-target").text(targetNum);
$("#gameScore").text(gameScore);
$("#wins").text(wins);
$("#losses").text(losses);

//selector and click event for crystals
$("#crystal1").on("click", function(){
  gameScore = (gameScore + crystalValues[0]);
})

$("#crystal2").on("click", function(){
  gameScore = (gameScore + crystalValues[1]);
})

$("#crystal3").on("click", function(){
  gameScore = (gameScore + crystalValues[2]);
})

$("#crystal4").on("click", function(){
  gameScore = (gameScore + crystalValues[3]);
})

$('#crystal').click(function() {
  new Audio(audio).play(); 
});

console.log(crystalValues)

//win condition, effects
if (gameScore === targetNum) {
    alert("You win!");
    resetValues();
  }

//lose condition, effects
  else if (gameScore >= targetNum) {
    alert("You lose :(");
    resetValues();
  }


})