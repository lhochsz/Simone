var clicks = 0;
var sequence = [];

//listen for start button click and then call simon's turn

$("#startGameButton").click(function() {

});

//pick a random button and add it to the sequence array

function createRandomArray() {
  var randomNumber = Math.random();
  if (randomNumber < 0.25) {
    sequence.push("p");
  } else if (randomNumber >= 0.25 && randomNumber < 0.5) {
    sequence.push("y");
  } else if (randomNumner >= 0.5 && randomNumber < 0.75) {
    sequence.push("w");
  } else if (randomNumber >= 0.75) {
    sequence.push("b");
  }
}

//set up animation of buttons function
function animateButtons() {
  if (sequence[i] == "p") {
    howToAnimate("#p");
  } else if (sequence[i] == "y") {
    howToAnimate("#y");
  } else if (sequence[i] == "w") {
    howToAnimate("#w");
  } else if (sequence[i] == "b") {
    howToAnimate("b");
  }
}

//set up how to animate
function howToAnimate() {
  $(".simoneButton").animate(.css("opacity", 0.5));
  $(".simoneButton").animate(.css("opacity", 0));
}

//it's simon's turn
// call light up function to highlight a button

function simonsTurn() {
  createRandomArray();
  animateButtons();
}


// listen for click


//add to counter


//game over and reset


