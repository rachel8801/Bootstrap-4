var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = colorPicked();
var pickedDisplay = document.getElementById("colorDisplay");
pickedDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

resetBtn.addEventListener("click", function(){
  // Generate all new colors
  colors = generateRandomColors(numSquares);
  //pick random colors for the arr
  pickedColor = colorPicked();
  // Change colors display 
  pickedDisplay.textContent = pickedColor;
  // loop color for the squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  };
});


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3
  colors = generateRandomColors(numSquares);
  pickedColor = colorPicked();
  pickedDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
   

  }
});
hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = colorPicked();
  pickedDisplay.textContent = pickedColor;
  for(var i = 0; i < numSquares; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});


for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of the clicked square
    var clicked = this.style.background ;
    // Compare clicked color to picked color
    if (clicked === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetBtn.textContent = "Play Again?";    
       //Change all squares to the same color
      changeColors(clicked);
      h1.style.background = clicked;
    } else {
      this.style.background= "#1b1b1b";
      messageDisplay.textContent = "Try Again!"
    }
  });
}

function changeColors (color) {
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}
// This function is to pick out the color arr 0-3 or 0-6
function colorPicked() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColors());
  }
  return arr;
}

function randomColors(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() *256);
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}