// The below code fills in the first row of the table
var movie = "Dune";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  // Create and save a reference to new empty table row
  $("tbody").append(`<tr>
  <td> ${response.Title}</td>
  <td> 2012${response.Year}</td>
  <td> Reza${response.Actor}</td>
  </tr>`)
  console.log(response)
  )
  ));

// Repeat the above logic to add rows for two more movies of your choice

// BONUS: Once complete, try to make your code as DRY as possible through the use of functions