// var $grid = clickableGrid(5, 5);
// $('main').append($grid);
//
// function clickableGrid(rows, cols){
//     var i = 0;
//     var $grid = $('<table>', {
//       class: 'grid'
//     });
//     for (var r = 0; r < rows; ++r){
//         var $tr = $('<tr>');
//         $tr.appendTo($grid);
//         for (var c = 0; c < cols; ++c){
//             var $cell = $('<td>', {
//               id: ++i
//             });
//             $cell.appendTo($tr)
//             $cell.html(i)
//
//             $cell.css('background-image',`url(images/${i%9}.png)`)
//
//             $cell.data('row', r);
//             $cell.data('column', c);
//             $cell.data('angle', 0)
//
//             $cell.on('click', function(){
//                 console.log("You clicked on element:", $(this));
//                 console.log("You clicked on row:", $(this).data('row'));
//                 console.log("You clicked on col:", $(this).data('column'));
//                 console.log("You clicked on item #:", $(this).attr('id'));
//
//                 rotateCell($(this));
//             });
//         }
//     }
//     return $grid;
// }
//

function rotateHex($el){
  var angle = ($el.data('angle') + 60) || 60;
  $el.css({'transform': 'rotate3d(0, 0, 1, ' + angle + 'deg)'});
  $el.data('angle', angle);
}

var $hexGrid = $('<ul>', {
  id: 'hexGrid'
})
.appendTo('main');

var gridSize = 30;

for (var i=0; i<gridSize; i++) {
  var $li = $('<li>', {
    class: 'hex'
  })
  .html(
    `<div class="hexIn">
       <a class="hexLink" href="#">
         <img src="images/${i%9}.png" alt="" />
       </a>
     </div>`
  )
  .appendTo($hexGrid)
}

$('.hexLink img').on('click', function(e){
  e.preventDefault();
  rotateHex($(this));
})
