//listener event for document

$(document).ready(function () {
  new WOW().init();

  //the game
  var theGame = function () {

    //establish the main variables
    //the target number you're trying to hit
    var targetNum = (function getRandomArbitrary() {
      return Math.floor(Math.random() * (120 - 19) + 19);
    })


    //player score
    var gameScore = 0;

    // total wins and losses
    var wins = 0;
    var losses = 0;
    var randomCrystalCount = []

    //array of crystal values
    var crystalValues = []

    var audio = "assets/images/click.mp3"

    //function to add random numbers to array
    function resetValues() {
      for (i = 0; i < 4; i++) {
        var randos = Math.floor(Math.random() * (9 - 1) + 1);
        crystalValues.push(randos);
        gameScore=0;
      }
    }
    resetValues();
    console.log(crystalValues);
    //selector and click event for crystals
    $("#crystal1").on("click", function () {
      gameScore = (gameScore + crystalValues[0]);
      console.log(gameScore);
      $("#gameScore").text(gameScore);

    })

    $("#crystal2").on("click", function () {
      gameScore = (gameScore + crystalValues[1]);
      $("#gameScore").text(gameScore);

    })

    $("#crystal3").on("click", function () {
      gameScore = (gameScore + crystalValues[2]);
      $("#gameScore").text(gameScore);

    })

    $("#crystal4").on("click", function () {
      gameScore = (gameScore + crystalValues[3]);
      $("#gameScore").text(gameScore);

    })

    $('#crystals').click(function () {
      new Audio(audio).play();
    });

    //enters stats on page with jQuery
    $("#number-target").text(targetNum);

    $("#wins").text(wins);
    $("#losses").text(losses);

    if (gameScore === targetNum) {
      alert("You win!");
      wins++;
      resetValues();
    }
  
    //lose condition, effects
    else if (gameScore >= targetNum) {
      alert("You lose :(");
      losses++;
      resetValues();
    }
  }
theGame();

})