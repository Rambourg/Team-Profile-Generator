 // Initial array of movies
var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];
let buttonsView = document.querySelector("#buttons-view")
let movieInput = document.querySelector("#movie-input")
renderButtons();


// Function for displaying movie data
function renderButtons() {


  // write a for loop!
  // YOUR CODE GOES HERE

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    let newButton = document.createElement("button");

    newButton.textContent = movie;
    buttonsView.appendChild(newButton);

  }



}

// This function handles events where one button is clicked
document.querySelector("#add-movie").addEventListener("click", function (event) {
  event.preventDefault();
  
  if(movieInput.value.trim() !== ""){
    buttonsView.innerHTML = "";
    let newMovie = movieInput.value
    movies.push(newMovie);
    movieInput.value ="";
    renderButtons();
  }

  // YOUR CODE GOES HERE

});








