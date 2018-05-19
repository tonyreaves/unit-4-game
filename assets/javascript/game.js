//listener event for document

$(document).ready(function () {
  new WOW().init();
//establish variables

  var wins = 0;
  var losses = 0;
  var crystalValues = [];
  var gameScore;
  var targetNum;

  //clicking noise
  var audio = "assets/images/click.mp3";
  $('#crystals').click(function () {
    new Audio(audio).play();
  })

  //resets the values, sets stats
  var theGame = function () {

    //the target number you're trying to hit
    targetNum = (function getRandomArbitrary() {
      return Math.floor(Math.random() * (120 - 19) + 19);
    })();

    //function to add random numbers to array
    for (i = 0; i < 4; i++) {
      var randos = Math.floor(Math.random() * (12 - 1) + 1);
      crystalValues.push(randos);
      gameScore = 0;
    }

    //console.log to cheat
    console.log(crystalValues);

    //enters stats on page with jQuery
    $("#gameScore").text(gameScore);
    $("#number-target").text(targetNum);
    $("#wins").text(wins);
    $("#losses").text(losses);
  }

  //call the function
  theGame();

  //checks whether you've won, tells you, resets the score, clears the array, 
  function checkWinCondition() {
    if (gameScore === targetNum) {
      alert("You win!");
      wins++;
      gameScore = 0;
      crystalValues.length = 0;
      theGame();
    }

    //lose condition, effects
    else if (gameScore >= targetNum) {
      alert("You lose!");
      losses++;
      gameScore = 0;
      crystalValues.length = 0;
      theGame();
    }

    //checking on things
    console.log({ gameScore, targetNum});
  }

  //selector and click event for crystals
  $("#crystal1").on("click", function () {
    gameScore = (gameScore + crystalValues[0]);
    $("#gameScore").text(gameScore);
    checkWinCondition();
  })

  $("#crystal2").on("click", function () {
    gameScore = (gameScore + crystalValues[1]);
    $("#gameScore").text(gameScore);
    checkWinCondition();
  })

  $("#crystal3").on("click", function () {
    gameScore = (gameScore + crystalValues[2]);
    $("#gameScore").text(gameScore);
    checkWinCondition();
  })

  $("#crystal4").on("click", function () {
    gameScore = (gameScore + crystalValues[3]);
    $("#gameScore").text(gameScore);
    checkWinCondition();
  })

});