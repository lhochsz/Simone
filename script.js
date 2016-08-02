 game = {
  sequence: [],
  userClicks: 0,
  delayBetweenAnimations: 1000,
  delayAfterUserClick: 1000,
}

//listen for start button click and then call simon's turn

$("#startGameButton").click(function() {
  simonsTurn();
  listenForUserClick();
  $("#headline").html('Simone');
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
  $("#count").html(game.sequence.length);

}

//game over and reset

function endOfGame() {
  game.sequence = [],
  game.userClicks = 0;
  $('#count').html(0);
}

// listen for user click and add time before next Simon turn
//add to counter

function listenForUserClick() {
  $("#p, #y, #w, #b").click(function() {
    console.log('User clicked:', this.id, game.userClicks);
    if (this.id == game.sequence[game.userClicks]) {
          console.log("Right!");
          game.userClicks++;

          if (game.userClicks === game.sequence.length) {
            game.userClicks = 0;
            setTimeout(function() {
              simonsTurn();
              }, 500);
          }
    } else {
          console.log("Wrong!");
          $("#headline").text("Well, you failed!");
          endOfGame();
          // disable Simone buttons
          $("#startGameButton").text("New Game?");
    }
  });
}

 $("#p").mousedown(function() {
    $("#p").addClass('selected');
     setTimeout(function() {
      $("#p").removeClass('selected');
    }, 320);
  });

  $("#y").mousedown(function() {
    $("#y").addClass('selected');
     setTimeout(function() {
      $("#y").removeClass('selected');
    }, 320);
  });

   $("#w").mousedown(function() {
    $("#w").addClass('selected');
     setTimeout(function() {
      $("#w").removeClass('selected');
    }, 320);
  });

  $("#b").mousedown(function() {
    $("#b").addClass('selected');
     setTimeout(function() {
      $("#b").removeClass('selected');
    }, 320);
  });






