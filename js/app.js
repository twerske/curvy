// When document is ready, begin to create *curvy*
$(document).ready(function() {
  // Set size of hex grid (in this case, 6 x 5)
  var gridSize = 39;

  // Create hex grid unordered list to hold the hexagons in
  var $hexGrid = $('<ul>', {
    id: 'hexGrid'
  })
  .appendTo('main');

  // Create each list item of a hexagonal grid tile and add to the grid
  for (var i=0; i<gridSize; i++) {
    var $li = $('<li>', {
      class: 'hex',
      id: `${i}`
    })
    .html(
      `<div class="hexIn">
        <a class="hexLink" href="#">
          <img src="images/game1/${i}n.png" alt="" />
        </a>
      </div>`
    )
    .appendTo($hexGrid);
  };

  /**
  Shuffle each tile on the grid individually and assign this angle of rotation to data angle.
  Input: none
  Output: no returns, shuffled tiles on the grid
  **/
  var shuffleGrid = function () {
    for (var i=0; i<gridSize; i++) {
      var random = Math.floor((Math.random() * 6) + 1);
      var angle = 30 + (60 * random);
      $(`#${i}`).data('angle', angle);
      $(`#${i}`).find('img').css({'transform': `rotate3d(0, 0, 1, ${angle}deg)`});
    };
  }

  // Shuffle the grid when start is pressed
  $('#start').on('click', function(){
    shuffleGrid();
  })

  /**
  Rotate individual tile and update angle data.
  Input: jquery element of a li hexagon tile to rotate
  Output: no returns, tile is rotated and updated
  **/
  var rotateHex = function($el){
    var angle = $el.closest('li').data('angle') + 60;
    $el.css({'transform': `rotate3d(0, 0, 1, ${angle}deg)`});
    $el.closest('li').data('angle', angle);
  };

  /**
  Alerts the user that they have won!
  Input: none
  Output: user notified
  **/
  var alertWinner = function() {
    $('html, body').animate({scrollTop: 0}, 'fast');
    $('h1').html("You won!");
    setTimeout(function(){
      $('h1').html("Curvy");
      shuffleGrid();
    }, 5000);
  };

  /**
  Check if a user has won.
  Input: none
  Output: no returns, if user won, alertWinner is called
  **/
  var checkWinner = function() {
    var won = true;
    $('#hexGrid').find('li').each(function() {
      var rotation = $(this).data('angle');
      console.log(`${$(this).attr('id')}: ${rotation % 360}`);
      if (($(this).attr('id') == 26) && (rotation % 360 != 90 && rotation % 360 != 270)) {
        won = false;
      }
      else if (($(this).attr('id') != 29) && (rotation % 360 != 90)) {
        won = false;
      }
    })
    if (won) {alertWinner()};
  };

  // Assign click event to each tile to rotate the tile and check for solution
  $('.hexLink').on('click', function(e){
    e.preventDefault();
    rotateHex($(this).find('img'));
    checkWinner();
  });
});
