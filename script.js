var game = {
  board: null,
  $board: null,
  $statusMessage: null,
  currentPlayer: 'player1',

  togglePlayer: function() {
    this.currentPlayer = (this.currentPlayer === 'player1' ? 'player2' : 'player1');
  },

  showCurrentPlayer: function() {
    this.$statusMessage.text(this.currentPlayer + 'turn');
  },

  showWinner: function() {
    this.$statusMessage.text('Player ' + this.currentPlayer + ' has won!');
  },

  var pink = $('pinkButton')[0];
  var yellow = $('yellowButton')[0];
  var white = $('whiteButton')[0];
  var blue = $('blueButton')[0];

  var movesArray = ['pink', 'yellow', 'white', 'blue']; // in quotes??
    for (var i = 0; i < movesArray.length; i++) {
      var randomElement = movesArray[_.random(movesArray.length-1)];
      movesArray.push(); // take an element from movesArray and push it randomly to newMovesArray

    }
    document.write(movesArray);
  },

    var newMovesArray = [];
      for (var i = 0; i <movesArray.length)


