function rotateHex($el){
  var angle = ($el.data('angle') + 60) || 60;
  $el.css({'transform': 'rotate3d(0, 0, 1, ' + angle + 'deg)'});
  $el.data('angle', angle);
}

var $hexGrid = $('<ul>', {
  id: 'hexGrid'
})
.appendTo('main');

var gridSize = 41;

for (var i=0; i<gridSize; i++) {
  var $li = $('<li>', {
    class: 'hex'
  })
  .html(
    `<div class="hexIn">
       <a class="hexLink" href="#">
         <img src="images/game1/${i}.png" alt="" />
       </a>
     </div>`
  )
  .appendTo($hexGrid)
}

$('.hexLink img').on('click', function(e){
  e.preventDefault();
  rotateHex($(this));
})
