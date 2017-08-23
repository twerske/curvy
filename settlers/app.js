// When document is ready, begin to create *curvy*
$(document).ready(function() {
  // Set size of hex grid (in this case, 6 x 5)
  var gridSize = 23;

  // Create hex grid unordered list to hold the hexagons in
  var $hexGrid = $('<ul>', {
    id: 'hexGrid'
  })
  .appendTo('main');

  var pieces = ["desert", "field", "field", "field", "field", "hill", "hill", "hill", "mountain", "mountain", "mountain", "pasture", "pasture", "pasture", "pasture", "woods", "woods", "woods", "woods"];
  // Create each list item of a hexagonal grid tile and add to the grid
  for (var i=0; i<gridSize; i++) {
    if (i != 0 && i != 4 && i != 22 && i != 18) {
      var src = `images/terrain/${pieces[i]}.png`;
    }
    else {src = ""}
    var $li = $('<li>', {
      class: 'hex',
      id: `${i}`
    })
    .html(
      `<div class="hexIn">
        <a class="hexLink" href="#">
          <img src=${src} alt="" />
        </a>
      </div>`
    )
    .appendTo($hexGrid);
  };

  // var initializeGameBoard = function() {
  //   var index = 0;
  //   $('#hexGrid img').each(function() {
  //     if (index != 0 && index != 4 && index != 22 && index != 18)
  //     $(this).attr('src', `.images/terrain/${pieces[++index]}.png`);
  //   });
  // }
  // initializeGameBoard();

  // /**
  // Shuffle each tile on the grid individually and assign this angle of rotation to data angle.
  // Input: none
  // Output: no returns, shuffled tiles on the grid
  // **/
  // var shuffleGrid = function () {
  //   for (var i=0; i<gridSize; i++) {
  //     var random = Math.floor((Math.random() * 6) + 1);
  //     var angle = 30 + (60 * random);
  //     $(`#${i}`).data('angle', angle);
  //     $(`#${i}`).find('img').css({'transform': `rotate3d(0, 0, 1, ${angle}deg)`});
  //   };
  // }
  //
  // // Shuffle the grid when start is pressed
  // $('#start').on('click', function(){
  //   shuffleGrid();
  // })
});
