/*******************************************************************************
VARIABLES
*******************************************************************************/

// Set size of hex grid (in this case, 5 x 5)
var gridSize = 23;

// Array of terrain tiles
var pieces = ['desert', 'field', 'field', 'field', 'field', 'hill', 'hill',
'hill', 'mountain', 'mountain', 'mountain', 'pasture', 'pasture',
'pasture', 'pasture', 'woods', 'woods', 'woods', 'woods'];

var tokens = [[2, '*'], [3, '**'], [3, '**'], [4, '***'], [4, '***'],
[5, '****'], [5, '****'], [6, '*****'], [6, '*****'], [8, '*****'],
[8, '*****'], [9, '****'], [9, '****'], [10, '***'], [10, '***'],
[11, '**'], [11, '**'], [12, '**']];

var resourceCards = {
  brick: 19,
  ore: 19,
  wool: 19,
  grain: 19,
  lumber: 19
}

var developmentCards = {
  knights: 14,
  progress: {
    monopoly: 2,
    road: 2,
    yearOfPlenty: 2
  },
  victoryPoint: {
    chapel: 1,
    library: 1,
    market: 1,
    palace: 1,
    university: 1
  }
}

var specialCards = {
  longestRoad: 1,
  largestArmy: 1
}


/*******************************************************************************
                              HELPER FUNCTIONS
*******************************************************************************/
// Shuffle an array randomly
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/*******************************************************************************
                            WHEN LOADED & LOGIC
*******************************************************************************/
$(document).ready(function() {
  // Create hex grid unordered list to hold the hexagons in
  var $hexGrid = $('<ul>', {
    id: 'hexGrid'
  })
  .appendTo('main');

  // Set up game board to play
  var initializeGameBoard = function() {
    $('#hexGrid li').remove();

    // Create each list item of a hexagonal grid tile and add to the grid
    var gamePieces = shuffle(pieces.slice(0));
    var gameTokens = shuffle(tokens.slice(0));
    var src, alt, token;
    for (var i=0; i<gridSize; i++) {
      if (i == 0 || i == 4 || i == 22 || i == 18) {
        alt = 'blank';
        src = `images/terrain/frog.png`;
        token = [0, ""];
      }
      else {
        alt = gamePieces.pop();
        src = `images/terrain/${alt}.png`;
        if (alt == 'desert') {
          token = ['R', ''];
        }
        else {
          token = gameTokens.pop();
        };
      };

      var $li = $('<li>', {
        class: `hex ${alt}`,
        id: `token${token[0]}`
      })
      .html(
        `<div class='hexIn ${alt}' >
          <a class='hexLink' href='#'>
            <img src=${src} alt=${alt}/>
            <h1>${token[0]}</h1>
            <p>${token[1]}</p>
          </a>
        </div>`
      )
      .appendTo($hexGrid);
    };
  };
  initializeGameBoard();

  // Re-initialize game when new game is pressed
  $('#start').on('click', function(){
    initializeGameBoard();
  })
});
