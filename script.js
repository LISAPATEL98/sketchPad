// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many squares per row?");
    clearGrid();
    createGrid(z);
};


function randomColor() {
var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    
    $("#newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");

      });
    });
    



    $(".rainbow").click(function() {
    	$(".grid").mouseover(function() {
    		$(this).css("background-color",randomColor)
    	});

    });
    

    $("#eraser").click(function() {
    	$(".grid").mouseover(function() {
    		$(this).css("background-color","#fff")
    	});
    });

    $("#reset").click(function() {
    	$(".grid").css("background-color","white")
    });

    $("#toggle").click(function() {
    	$(".grid").css("outline","none")
    });

   

  
  


});














  






