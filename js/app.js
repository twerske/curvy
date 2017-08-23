$(document).ready(function() {
  var gridSize = 39;

  var $hexGrid = $('<ul>', {
    id: 'hexGrid'
  })
  .appendTo('main');

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

  for (var i=0; i<gridSize; i++) {
    var random = Math.floor((Math.random() * 6) + 1);
    var angle = 30 + (60 * random);
    $(`#${i}`).data('angle', angle);
    $(`#${i}`).find('img').css({'transform': `rotate3d(0, 0, 1, ${angle}deg)`});
  };

  var rotateHex = function($el){
    var angle = $el.closest('li').data('angle') + 60;
    $el.css({'transform': `rotate3d(0, 0, 1, ${angle}deg)`});
    $el.closest('li').data('angle', angle);
  };

  var alertWinner = function() {
    alert(`Congratulations! You completed this curvy puzzle with a time of 0:00`)
  }

  var checkWinner = function() {
    var won = true;
    $('#hexGrid').find('li').each(function() {
      var rotation = $(this).data('angle');
      console.log($(this).attr('id') + "current rotation: " + rotation % 360)
      if (($(this).attr('id') == 26) && (rotation % 360 != 90 && rotation % 360 != 270)) {
        won = false;
      }
      else if (($(this).attr('id') != 29) && (rotation % 360 != 90)) {
        won = false;
      }
    })
    if (won) {alertWinner()};
  };

  $('.hexLink').on('click', function(e){
    e.preventDefault();
    rotateHex($(this).find('img'));
    checkWinner();
  });

});
