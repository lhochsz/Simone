 game = {
  sequence: [],
  userClicks: 0,
  delayBetweenAnimations: 900,
}

//listen for start button click and then call simone's turn

$("#startGameButton").click(function() {
  $("#startGameButton").css("visibility", "hidden");
  simonesTurn();
  $("#headline").html('Simone');
});

// listen for user click and add time before next Simone turn

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
          endOfGame();
          $("#headline").text("Well, you failed!");
          endAudio.play();
          $("#startGameButton").css("visibility", "visible");
          $("#startGameButton").text("New Game?");
    }
  });


// Timing variables
var highlightDuration = 320;
var simoneWaitTime = 700;

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
    console.log('here', game.sequence);
  }
};

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

//it's simone's turn
// call light up function to highlight a button

function simonesTurn() {
  addNewRandomMove();
  animateButtons();
  $("#count").html(game.sequence.length);
}

//game over and reset

function endOfGame() {
  game.sequence = [];
  game.userClicks = 0;
  $('#count').html(0);
    if (game.sequence.length > $("#count").html()) {
  console.log('sequence', game.sequence);
  console.log('clicks', game.userClicks);
};

// end of game sound

var endAudio = document.createElement('audio');
  endAudio.setAttribute('src', 'sounds/sad_trombone.mp3');
  endAudio.setAttribute('autoplay:false', 'autoplay');

// user click events

var pClick =
 $("#p").click(function() {
    $("#p").addClass('selected');
    pAudio.play();
     setTimeout(function() {
      $("#p").removeClass('selected');
    }, highlightDuration);
  });


var yClick =
  $("#y").click(function() {
    $("#y").addClass('selected');
    yAudio.play();
     setTimeout(function() {
      $("#y").removeClass('selected');
    }, highlightDuration);
  });


var wClick =
   $("#w").click(function() {
    $("#w").addClass('selected');
    wAudio.play();
     setTimeout(function() {
      $("#w").removeClass('selected');
    }, highlightDuration);
  });


var bClick =
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

