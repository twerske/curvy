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

var rollDice = function() {
    var i,
        faceValue,
        total = 0,
        output = '';
    for (i = 0; i < 2; i++) {
        faceValue = Math.floor(Math.random() * 6);
        output += `&#x268${faceValue}; `;
        total += faceValue;
    }
    $('#dice').html(output);

    return total
}

/*******************************************************************************
                            WHEN LOADED & LOGIC
*******************************************************************************/
// Fit game board responsively on the game tile background
$(window).resize(function() {
  var h = 4 * parseFloat($('#hexGrid').css('padding-bottom')) + $('#hexGrid').height()

  $('#gameGrid').height(h);
  $('#gameGrid').width($('#hexGrid').width());
});

$(document).ready(function() {
  // Create hex grid unordered list to hold the hexagons in
  var $hexGrid = $('<ul>', {
    id: 'hexGrid'
  })
  .appendTo('main');

  var $gameGrid = $('<ul>', {
    id: 'gameGrid',
  })
  .appendTo('main');

  // Set up game board to play
  var initializeHexGrid = function() {
    $('#hexGrid li').remove();

    // Create each list item of a hexagonal grid tile and add to the grid
    var gamePieces = shuffle(pieces.slice(0));
    var gameTokens = shuffle(tokens.slice(0));
    var src, alt, token;
    for (var i=0; i<hexGridSize; i++) {
      if (i == 0 || i == 4 || i == 22 || i == 18) {
        alt = 'blank';
        src = `images/terrain/frog.png`;
        token = [0, ''];
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

    rollDice();

    $(window).trigger('resize');
  };

  var initializeGameGrid = function() {
    $('#gameGrid li').remove();

    for (var i=0; i<gameGridSize; i++) {
      var $li = $('<li>', {
        class: `gameSpace`,
        id: `space${i}`
      })
      .html(
        `<div class='square' >
          <p></p>
        </div>`
      )
      .appendTo($gameGrid);

      if (i in vertexIndexes) {
        $li.addClass('vertex');
        $li.find('p').html('&#9830;');
        vertexIndexes[i].adjacentRoads.forEach(function(road) {
          $(`#space${road}`).addClass('road');
        });
      };
    };
  }

  var select = function($el) {
    $el.find('p').attr('id', currentPlayer);
    $el.addClass(currentGamePiece)
    $el.prop('selected', true);
  }

  var unselect = function($el) {
    $el.find('p').attr('id', '');
    $el.removeClass(currentGamePiece)
    $el.prop('selected', false);
  }

  var initializeGamePieces = function() {
    $('.vertex').on('click', function(){
      if ($(this).prop('selected') == true) {
        unselect($(this));
      }
      else {select($(this));}
      // $(this).attr('disabled', true);
    });

    $('.road').on('click', function(){
      if ($(this).prop('selected') == true) {
        unselect($(this));
      }
      else {select($(this));}
      // $(this).attr('disabled', true);
    });
  }

  initializeHexGrid();
  initializeGameGrid();
  initializeGamePieces();

  // Re-initialize game when new game is pressed
  $('#start').on('click', function() {
    initializeHexGrid();
    initializeGameGrid();
    initializeGamePieces();
  });

  var currentPlayerIndex = 0,
      currentGamePiece= 'settlement',
      currentPlayer = players[currentPlayerIndex];
  $('#currentPlayer').html(currentPlayer);
  $('#currentPlayer').closest('h2').attr('id', currentPlayer);

  $('#turnOver').on('click', function() {
    currentPlayer = players[++currentPlayerIndex % 4];
    $('#currentPlayer').html(currentPlayer);
    $('#currentPlayer').closest('h2').attr('id', currentPlayer);
  });

  var turnRoll = 0;
  // Roll dice when roll is pressed
  var enableDice = function() {
    // $('#roll').attr('disabled', false)
    $('#roll').on('click', function(){
      turnRoll = rollDice();
    });
  };
  enableDice();
});

/*******************************************************************************
VARIABLES
*******************************************************************************/

// Set size of hex grid (in this case, 5 x 5)
var hexGridSize = 23;
var gameGridSize = 420;

// Array of terrain tiles
var pieces = ['desert', 'field', 'field', 'field', 'field', 'hill', 'hill',
'hill', 'mountain', 'mountain', 'mountain', 'pasture', 'pasture',
'pasture', 'pasture', 'woods', 'woods', 'woods', 'woods'];

var tokens = [[2, '*'], [3, '**'], [3, '**'], [4, '***'], [4, '***'],
[5, '****'], [5, '****'], [6, '*****'], [6, '*****'], [8, '*****'],
[8, '*****'], [9, '****'], [9, '****'], [10, '***'], [10, '***'],
[11, '**'], [11, '**'], [12, '**']];

var vertexIndexes = {
  8: {
    adjacentResources: [3],
    adjacentRoads: [28, 9]
  },
  11: {
    adjacentResources: [3],
    adjacentRoads: [9, 31]
  },
  45: {
    adjacentResources: [2],
    adjacentRoads: [64, 46]
  },
  47: {
    adjacentResources: [2, 3],
    adjacentRoads: [46, 28, 68]
  },
  52: {
    adjacentResources: [3, 8],
    adjacentRoads: [31, 71, 53]
  },
  54: {
    adjacentResources: [8],
    adjacentRoads: [53, 75]
  },
  81: {
    adjacentResources: [1],
    adjacentRoads: [101, 82]
  },
  84: {
    adjacentResources: [1, 2],
    adjacentRoads: [82, 64, 104]
  },
  88: {
    adjacentResources: [2, 3, 6],
    adjacentRoads: [68, 89, 108]
  },
  91: {
    adjacentResources: [3, 7, 8],
    adjacentRoads: [89, 71, 111]
  },
  95: {
    adjacentResources: [8, 13],
    adjacentRoads: [75, 115, 96]
  },
  98: {
    adjacentResources: [13],
    adjacentRoads: [96, 118]
  },
  120: {
    adjacentResources: [1],
    adjacentRoads: [101, 141]
  },
  125: {
    adjacentResources: [1, 2, 6],
    adjacentRoads: [104, 144, 126]
  },
  127: {
    adjacentResources: [2, 6, 7],
    adjacentRoads: [126, 108, 148]
  },
  132: {
    adjacentResources: [7, 8, 12],
    adjacentRoads: [111, 151, 133]
  },
  134: {
    adjacentResources: [8, 12, 13],
    adjacentRoads: [133, 115, 155]
  },
  139: {
    adjacentResources: [13],
    adjacentRoads: [118, 158]
  },
  161: {
    adjacentResources: [1, 5],
    adjacentRoads: [141, 162, 181]
  },
  164: {
    adjacentResources: [1, 5, 6],
    adjacentRoads: [162, 144, 184]
  },
  168: {
    adjacentResources: [6, 7, 11],
    adjacentRoads: [148, 188, 169]
  },
  171: {
    adjacentResources: [7, 11, 12],
    adjacentRoads: [169, 151, 191]
  },
  175: {
    adjacentResources: [12, 13, 17],
    adjacentRoads: [155, 194, 176]
  },
  178: {
    adjacentResources: [13, 17],
    adjacentRoads: [176, 158, 198]
  },
  200: {
    adjacentResources: [5],
    adjacentRoads: [181, 221]
  },
  205: {
    adjacentResources: [5, 6, 10],
    adjacentRoads: [184, 224, 206]
  },
  207: {
    adjacentResources: [6, 10 ,11],
    adjacentRoads: [206, 188, 228]
  },
  212: {
    adjacentResources: [11, 12, 16],
    adjacentRoads: [191, 231, 213]
  },
  214: {
    adjacentResources: [12, 16, 17],
    adjacentRoads: [213, 195, 235]
  },
  219: {
    adjacentResources: [17],
    adjacentRoads: [198, 238]
  },
  241: {
    adjacentResources: [5, 9],
    adjacentRoads: [221, 261, 242]
  },
  244: {
    adjacentResources: [5, 9, 10],
    adjacentRoads: [242, 224, 264]
  },
  248: {
    adjacentResources: [10, 11, 15],
    adjacentRoads: [228, 267, 249]
  },
  251: {
    adjacentResources: [11, 15, 16],
    adjacentRoads: [249, 231, 271]
  },
  255: {
    adjacentResources: [16, 17, 21],
    adjacentRoads: [235, 274, 256]
  },
  258: {
    adjacentResources: [17, 21],
    adjacentRoads: [256, 238, 278]
  },
  280: {
    adjacentResources: [9],
    adjacentRoads: [261, 301]
  },
  285: {
    adjacentResources: [9, 10, 14],
    adjacentRoads: [264, 286, 304]
  },
  287: {
    adjacentResources: [10, 14, 15],
    adjacentRoads: [286, 268, 308]
  },
  292: {
    adjacentResources: [15, 16, 20],
    adjacentRoads: [271, 311, 293]
  },
  294: {
    adjacentResources: [16, 20, 21],
    adjacentRoads: [293, 275, 315]
  },
  299: {
    adjacentResources: [21],
    adjacentRoads: [278, 318]
  },
  321: {
    adjacentResources: [9],
    adjacentRoads: [301, 322]
  },
  324: {
    adjacentResources: [9, 14],
    adjacentRoads: [322, 304, 344]
  },
  328: {
    adjacentResources: [14, 15, 19],
    adjacentRoads: [308, 348, 329]
  },
  331: {
    adjacentResources: [15, 19, 20],
    adjacentRoads: [329, 311, 351]
  },
  335: {
    adjacentResources: [20, 21],
    adjacentRoads: [315, 354, 336]
  },
  338: {
    adjacentResources: [21],
    adjacentRoads: [336, 318]
  },
  365: {
    adjacentResources: [14],
    adjacentRoads: [344, 366]
  },
  367: {
    adjacentResources: [14, 19],
    adjacentRoads: [366, 348, 388]
  },
  372: {
    adjacentResources: [19, 20],
    adjacentRoads: [391, 351, 373]
  },
  374: {
    adjacentResources: [20],
    adjacentRoads: [373, 355]
  },
  408: {
    adjacentResources: [19],
    adjacentRoads: [388, 409]
  },
  411: {
    adjacentResources: [19],
    adjacentRoads: [409, 391]
  }
}

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
};

var specialCards = {
  longestRoad: 1,
  largestArmy: 1
};

var players = ['orange', 'blue', 'white', 'red'];

var playerPieceStatus = {
  orange: {
    cities: 0,
    settlements: 0,
    roads: 0,
    brick: 0,
    ore: 0,
    wool: 0,
    grain: 0,
    lumber: 0
  },
  blue: {
    cities: 0,
    settlements: 0,
    roads: 0,
    brick: 0,
    ore: 0,
    wool: 0,
    grain: 0,
    lumber: 0
  },
  white: {
    cities: 0,
    settlements: 0,
    roads: 0,
    brick: 0,
    ore: 0,
    wool: 0,
    grain: 0,
    lumber: 0
  },
  red: {
    cities: 0,
    settlements: 0,
    roads: 0,
    brick: 0,
    ore: 0,
    wool: 0,
    grain: 0,
    lumber: 0
  }
}

var pieceMax = {
  cities: 4,
  settlements: 5,
  roads: 15
}
