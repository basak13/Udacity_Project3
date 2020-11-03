var sizePicker = document.getElementById("sizePicker");
var table = document.getElementById("pixelCanvas");

sizePicker.addEventListener('submit' ,function(event) {
           event.preventDefault();
           makeGrid();
       })

function makeGrid() {

var width = document.getElementById("inputWidth").value;
var height = document.getElementById("inputHeight").value;

  table.innerHTML = "";

    for (var y = 0; y < height; y++) {
       var row = table.insertRow(y);
       for (var x = 0; x < width; x++) {
             var cell = row.insertCell(x);
             cell.onclick = function () {
            paint(this);
        };
           }
        }
    }


  function paint(cell) {
  var color = document.getElementById("colorPicker").value;
   cell.style.backgroundColor = color;
  }
