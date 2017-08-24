/*******************************************************************************
VARIABLES
*******************************************************************************/
var VARIABLES = (function(){
  return {
    // Set size of hex grid (in this case, 5 x 5)
    hexGridSize: 23,
    gameGridSize: 420,

    // Array of terrain tiles
    pieces: ['desert', 'field', 'field', 'field', 'field', 'hill', 'hill',
    'hill', 'mountain', 'mountain', 'mountain', 'pasture', 'pasture',
    'pasture', 'pasture', 'woods', 'woods', 'woods', 'woods'],

    tokens: [[2, '*'], [3, '**'], [3, '**'], [4, '***'], [4, '***'],
    [5, '****'], [5, '****'], [6, '*****'], [6, '*****'], [8, '*****'],
    [8, '*****'], [9, '****'], [9, '****'], [10, '***'], [10, '***'],
    [11, '**'], [11, '**'], [12, '**']],

    vertexIndexes: {
      8: {
        adjacentResources: [],
        adjacentRoads: []
      },
      11: {
        adjacentResources: [],
        adjacentRoads: []
      },
      45: {
        adjacentResources: [],
        adjacentRoads: []
      },
      47: {
        adjacentResources: [],
        adjacentRoads: []
      },
      52: {
        adjacentResources: [],
        adjacentRoads: []
      },
      54: {
        adjacentResources: [],
        adjacentRoads: []
      },
      81: {
        adjacentResources: [],
        adjacentRoads: []
      },
      84: {
        adjacentResources: [],
        adjacentRoads: []
      },
      88: {
        adjacentResources: [],
        adjacentRoads: []
      },
      91: {
        adjacentResources: [],
        adjacentRoads: []
      },
      95: {
        adjacentResources: [],
        adjacentRoads: []
      },
      98: {
        adjacentResources: [],
        adjacentRoads: []
      },
      120: {
        adjacentResources: [],
        adjacentRoads: []
      },
      125: {
        adjacentResources: [],
        adjacentRoads: []
      },
      127: {
        adjacentResources: [],
        adjacentRoads: []
      },
      132: {
        adjacentResources: [],
        adjacentRoads: []
      },
      134: {
        adjacentResources: [],
        adjacentRoads: []
      },
      139: {
        adjacentResources: [],
        adjacentRoads: []
      },
      161: {
        adjacentResources: [],
        adjacentRoads: []
      },
      164: {
        adjacentResources: [],
        adjacentRoads: []
      },
      168: {
        adjacentResources: [],
        adjacentRoads: []
      },
      171: {
        adjacentResources: [],
        adjacentRoads: []
      },
      175: {
        adjacentResources: [],
        adjacentRoads: []
      },
      178: {
        adjacentResources: [],
        adjacentRoads: []
      },
      200: {
        adjacentResources: [],
        adjacentRoads: []
      },
      205: {
        adjacentResources: [],
        adjacentRoads: []
      },
      207: {
        adjacentResources: [],
        adjacentRoads: []
      },
      212: {
        adjacentResources: [],
        adjacentRoads: []
      },
      214: {
        adjacentResources: [],
        adjacentRoads: []
      },
      219: {
        adjacentResources: [],
        adjacentRoads: []
      },
      241: {
        adjacentResources: [],
        adjacentRoads: []
      },
      244: {
        adjacentResources: [],
        adjacentRoads: []
      },
      248: {
        adjacentResources: [],
        adjacentRoads: []
      },
      251: {
        adjacentResources: [],
        adjacentRoads: []
      },
      255: {
        adjacentResources: [],
        adjacentRoads: []
      },
      258: {
        adjacentResources: [],
        adjacentRoads: []
      },
      280: {
        adjacentResources: [],
        adjacentRoads: []
      },
      285: {
        adjacentResources: [],
        adjacentRoads: []
      },
      287: {
        adjacentResources: [],
        adjacentRoads: []
      },
      292: {
        adjacentResources: [],
        adjacentRoads: []
      },
      294: {
        adjacentResources: [],
        adjacentRoads: []
      },
      299: {
        adjacentResources: [],
        adjacentRoads: []
      },
      321: {
        adjacentResources: [],
        adjacentRoads: []
      },
      324: {
        adjacentResources: [],
        adjacentRoads: []
      },
      328: {
        adjacentResources: [],
        adjacentRoads: []
      },
      331: {
        adjacentResources: [],
        adjacentRoads: []
      },
      335: {
        adjacentResources: [],
        adjacentRoads: []
      },
      338: {
        adjacentResources: [],
        adjacentRoads: []
      },
      365: {
        adjacentResources: [],
        adjacentRoads: []
      },
      367: {
        adjacentResources: [],
        adjacentRoads: []
      },
      372: {
        adjacentResources: [],
        adjacentRoads: []
      },
      374: {
        adjacentResources: [],
        adjacentRoads: []
      },
      408: {
        adjacentResources: [],
        adjacentRoads: []
      },
      411: {
        adjacentResources: [],
        adjacentRoads: []
      }
    },

    resourceCards: {
      brick: 19,
      ore: 19,
      wool: 19,
      grain: 19,
      lumber: 19
    },

    developmentCards: {
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
    },

    specialCards: {
      longestRoad: 1,
      largestArmy: 1
    },

    players: {
      orange: {
        cities: 4,
        settlements: 5,
        roads: 15
      },
      blue: {
        cities: 4,
        settlements: 5,
        roads: 15
      },
      white: {
        cities: 4,
        settlements: 5,
        roads: 15
      },
      red: {
        cities: 4,
        settlements: 5,
        roads: 15
      }
    }
  }
})();
