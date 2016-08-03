 game = {
  sequence: [],
  userClicks: 0,
  delayBetweenAnimations: 1000,
  delayAfterUserClick: 1000,
}

//listen for start button click and then call simon's turn

$("#startGameButton").click(function() {
  $("#startGameButton").css("visibility", "hidden");
  simonesTurn();
  listenForUserClick();
  $("#headline").html('Simone');
});

// Timing variables
var highlightDuration = 320;
var simoneWaitTime = 1000;



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

// set up how to animate and add sound
function howToAnimate(color) {
  console.log('howToAnimate:', color);
  var simoneButton = $('#' + color);
  simoneButton.addClass('selected');
    function addSound() {
      var playSound = $(simoneButton).attr('data-tile');
      $('#sound' + playSound)[0].play();
    }
    addSound();
  setTimeout(function() {
    simoneButton.removeClass('selected');
  }, highlightDuration);

}

//it's simon's turn
// call light up function to highlight a button

function simonesTurn() {
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
              simonesTurn();
              }, simoneWaitTime);
          }
    } else {
          console.log("Wrong!");
          $("#headline").text("Well, you failed!");
          endOfGame();
          // disable Simone buttons
          $("#startGameButton").css("visibility", "visible");
          $("#startGameButton").text("New Game?");
    }
  });
}

 $("#p").click(function() {
    $("#p").addClass('selected');
    pAudio.play();
     setTimeout(function() {
      $("#p").removeClass('selected');
    }, highlightDuration);
  });

  $("#y").click(function() {
    $("#y").addClass('selected');
    yAudio.play();
     setTimeout(function() {
      $("#y").removeClass('selected');
    }, highlightDuration);

  });

   $("#w").click(function() {
    $("#w").addClass('selected');
    wAudio.play();
     setTimeout(function() {
      $("#w").removeClass('selected');
    }, highlightDuration);
  });

  $("#b").click(function() {
    $("#b").addClass('selected');
    bAudio.play();
     setTimeout(function() {
      $("#b").removeClass('selected');
    }, highlightDuration);
  });

var pAudio = document.createElement('audio');
  pAudio.setAttribute('src', 'sounds/jump.mp3');
  pAudio.setAttribute('autoplay:false', 'autoplay');

var yAudio = document.createElement('audio');
  yAudio.setAttribute('src', 'sounds/robot.mp3');
  yAudio.setAttribute('autoplay:false', 'autoplay');

var wAudio = document.createElement('audio');
  wAudio.setAttribute('src', 'sounds/blip.mp3');
  wAudio.setAttribute('autoplay:false', 'autoplay');

var bAudio = document.createElement('audio');
  bAudio.setAttribute('src', 'sounds/ting.mp3');
  bAudio.setAttribute('autoplay:false', 'autoplay');
