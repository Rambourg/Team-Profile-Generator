// JavaScript function that wraps everything



let $pickedColor = $("#rand-target-color")
let $colorUl = $("#color-picker")

// Array for word colors
var colorsOfText = [];

// Target word
var targetColor;

// Target word color
var targetColorOfText;

// User"s selection
var userAnswer;

// Array for words
var colors = [
  "brown",
  "blue",
  "magenta",
  "teal",
  "coral",
  "black"
];

// This function sets a random color "word" and a random set of colors "visuals"
function randColor() {

  // Set random word


  // Set random word color


}

// This function creates the actual "game" logic.
function createColorPicker() {

  // Shuffle color array



  // Push to text color array



  // Shuffle text color array


  // Loop through all colors in the array
  // Create element to hold word
  // Output a word
  // Make word a random color

}

// Clear the divs and arrays upon each round.
function clear() {

}

// Function for resetting colors and setting new colors.
function reset() {
colors.sort
    
  }
  return colors;
}

  
  let randomIndex = Math.floor(Math.random() *colors.length);
  let randomColor =colors[randomIndex];
  $pickedColor.text(randomColor);

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    let $newLi =$("<li>")
    $newLi.text(color);
    $newLi.attr("data-color", color);


    $colorUl.append($newLi)
  }
  

}

// Get id of element clicked by user
$("#color-picker").click(function(event) {

});

// Run game
reset();