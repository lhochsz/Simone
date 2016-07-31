var game = {
  sequence: [],
  round: 0,
  playNumber: 0,
  speed: 1000,
  clicked: 0
}

// Change color if button selected by ID

   $(document).ready(function() {
      var audio = $("#sound");

      function animate(divid) {

        /* if (game.round > 5) {
            settings.speed = 500;
        } */

      if (divid == "p") {
        $("#p").css("background-color", "#ff00c3");
        $("#tune").attr("src", "sounds/Jump-SoundBible.com-1007297584.mp3")
        setTimeout(function() {
          $("#p").css("background-color", "#fca9e7"); }, 200);
      } else if (divid == "y") {
        $("#y").css("background-color", "#fff600");
        $("#tune").attr("src", "sounds/Robot_blip_2-Marianne_Gagnon-299056732.mp3")
        setTimeout(function() {
          $("#y").css("background-color", "#fcf8a9"); }, 200);
      } else if (divid == "w") {
        $("#w").css("background-color", "#aaaaaa");
        $("#tune").attr("src", "sounds/Robot_blip-Marianne_Gagnon-120342607.mp3")
        setTimeout(function() {
          $("#w").css("background-color", "white"); }, 200);
      } else if (divid == "b") {
        $("#b").css("background-color", "#00ddff");
        $("#tune").attr("src", "sounds/Ting-Popup_Pixels-349896185.mp3")
        setTimeout(function() {
          $("#b").css("background-color", "#b5eaf2"); }, 200);
    }


        audio[0].pause();
        audio[0].load();
        audio[0].play();
    }

// Make ID

    function makeId() {
        var text = "";
        var possibleColor = "pywb";

        for (var i = 0; i < 1; i++) {
          text += possibleColor.charAt(Math.floor(Math.random() * possibleColor.length));
          game.sequence.push(text);
        }

    function gameSequence() {
      setTimeout(function() {
        animate(game.sequence[game.playNumber]);
        game.playNumber++;
        if (game.playNumber < game.sequence.length) {
          gameSequence();
        } else {
          game.playNumber = 0;
          listenForClick();
        }
      }, game.speed)
    }
    gameSequence();
}

// Listen for player click

    function listenForClick() {
      $("#p, #y, #w, #b").on("mousedown", function() {
          if (this.id == game.sequence[game.clicked]) {

              if (game.clicked === game.sequence.length - 1) {
                $("#p, #y, #w, #b").off("mousedown");
                game.clicked = 0;
                $("#startGameButton").trigger("click");
              } else {
                console.log("Right!");
                game.clicked++;
              }

          } else {
            console.log("You clicked the wrong one.");
            $("#newGameButton").show();
            $("#startGameButton").hide();
            $("#newGameButton").addClass("slideUp");
            $("#simon, #count").css("filter", "blur(5px)");
            $("#simon, #count").css("-webkit-filter", "blur(5px)");
            game.clicked = 0;
            $("#p, #y, #w, #b").off("mousedown");
          }
      });
    }

// Start game

  $("#p, #y, #w, #b").on("click", function() {
    animate(this.id)
  });

  $("#startGameButton").on("click", function() {
    $("#startGameButton").hide();
    $("#simon, #count").css("filter", "blur(0px)");
    $("#simon, #count").css("-webkit-filter", "blur(0px)");;
    game.round++;
    makeId();
    $("#count").html(game.round);
  });

  $("#newGameButton").on("click", function() {
    $("#newGameButton").hide();
    game.sequence = [];
    game.round = 0;
    game.playNumber = 0;
    game.speed = 1000;
    game.clicked = 0;
    $("#startGameButton").trigger("click");
    $("#startGameButton").show();
  });

});

