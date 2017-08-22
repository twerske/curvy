var $grid = clickableGrid(5, 5);
$('main').append($grid);

function clickableGrid(rows, cols){
    var i = 0;
    var $grid = $('<table>', {
      class: 'grid'
    });
    for (var r = 0; r < rows; ++r){
        var $tr = $('<tr>');
        $tr.appendTo($grid);
        for (var c = 0; c < cols; ++c){
            var $cell = $('<td>', {
              id: ++i
            });
            $cell.appendTo($tr)
            $cell.html(i)

            $cell.css('background-image',`url(images/${i%9}.png)`)

            $cell.data('row', r);
            $cell.data('column', c);
            $cell.data('angle', 0)

            $cell.on('click', function(){
                console.log("You clicked on element:", $(this));
                console.log("You clicked on row:", $(this).data('row'));
                console.log("You clicked on col:", $(this).data('column'));
                console.log("You clicked on item #:", $(this).attr('id'));

                rotateCell($(this));
            });
        }
    }
    return $grid;
}

function rotateCell($el){
    var angle = ($el.data('angle') + 90);
    $el.css({'transform': 'rotate(' + angle + 'deg)'});
    $el.data('angle', angle);
}

// $testSVG = $('<svg', {
//   id: "svg",
//   width: "0",
//   height: "0"
// })
//
// $testPath = $('<path', {
//   id: "path",
//   d: "M0 0"
// })
// .appendTo($testSVG)
//
// function connectAll() {
//     // connect all the paths you want!
//     connectElements($("#svg"), $("#path"), $("#1"),  $("#2"));
//     // ...
//     // connectElements($("#svg1"), $("#someOtherPath"), $("#purple"), $("#teal")  );
//     // connectElements($("#svg1"), $("#yetAnotherPath"), $("#Tom"), $("#teal")  );
// }
