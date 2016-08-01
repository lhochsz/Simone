 game = {
  sequence: [],
  clicks: 0,
  delayBetweenAnimations: 500
}

//listen for start button click and then call simon's turn

$("#startGameButton").click(function() {
  simonsTurn();
  listenForUserClick();
});


//pick a random button and add it to the sequence array

function addNewRandomMove() {
  var randomNumber = Math.random();
  console.log('random number: '+ randomNumber);
  if (randomNumber < 0.25) {
    game.sequence.push("p");
  } else if (randomNumber >= 0.25 && randomNumber < 0.5) {
    game.sequence.push("y");
  } else if (randomNumber >= 0.5 && randomNumber < 0.75) {
    game.sequence.push("w");
  } else if (randomNumber >= 0.75) {
    game.sequence.push("b");
  }
  console.log('game.sequence:', game.sequence);
}

function delayedAnimation(color, delay) {
  setTimeout(function() {
    howToAnimate(color);
  }, delay);
}

//set up animation of buttons function
function animateButtons() {
  for (var i = 0; i < game.sequence.length; i++) {
    delayedAnimation(game.sequence[i], i * game.delayBetweenAnimations);
  }
}


//set up how to animate
function howToAnimate(color) {
  console.log('howToAnimate:', color);
  var simoneButton = $('#' + color);
  simoneButton.addClass('selected');
  setTimeout(function() {
    simoneButton.removeClass('selected');
  }, 320);
}

//it's simon's turn
// call light up function to highlight a button

function simonsTurn() {
  addNewRandomMove();
  animateButtons();
}


// listen for user click

function listenForUserClick() {
  // $(".simoneButton").click(function() {
  //   if ($(".simoneButton") == sequence[i]) {
  //     continue to next i;
  //   } else if ($(".simoneButton") != sequence[i]) {
  //     endOfGame();
  //     reset;
  //   }
  // });
}

//add to counter

 function addToCounter() {
    // if (clicks.length = sequence) {
    //   $("#count").text(round??);
    // }
 }

//game over and reset

function endOfGame() {
  var sequence = [],
  clicks = 0;

}

