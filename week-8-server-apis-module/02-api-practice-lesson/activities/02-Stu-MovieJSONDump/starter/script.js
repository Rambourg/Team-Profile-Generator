 // This .on("click") function will trigger the AJAX Call
 $("#find-movie").on("click", function(event) {

  // Preventing the submit button from trying to submit the form
  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  
  // Here we grab the text from the input box
  var movie = $("#movie-input").val();

  document.querySelector("#find-movie").addEventListener("click", function(event) {
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    var movie = document.querySelector("#movie-input").value;
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    fetch(queryURL)
    .then( response => response.json())
    .then(movie => {
      
         document.querySelector("#movie-view").textContent = JSON.stringify(movie);  
    })
  
  });

  
  // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

  // =================================================================

  // CODE GOES HERE

  // =================================================================
});