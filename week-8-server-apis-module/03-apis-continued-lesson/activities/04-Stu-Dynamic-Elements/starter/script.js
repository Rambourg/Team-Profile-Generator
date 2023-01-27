$("button").on("click", function() {
  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=ISmDlZUznfAhvlWwQftqnIlg6hiWz2mC";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then (function(response) {
    // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
    // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

    console.log(response);

    // Step 2: since the image information is inside of the data key,
    // make a variable named results and set it equal to response.data
    

    // =============== put step 2 in between these dashes ==================
    let results = response.data;
    // ========================
// Step 3: uncomment the for loop above and the closing curly bracket below.
     for (var i = 0; i < results.length; i++) {
  // Make a div with jQuery and store it in a variable named animalDiv.
      let gifDivanimalDiv = $("<div>");

      // Make a paragraph tag with jQuery and store it in a variable named p.
    // Set the inner text of the paragraph to the rating of the image in results[i].
      let p = $("<p>").text("rating:" + rating);

    
    // Make an image tag with jQuery and store it in a variable named animalImage.
    let animalImage = $("<img>");

     // Set the image's src to results[i]'s fixed_height.url.
    animalImage.attr("src", results[i].images.fixed_height.url);

    
   
    // Append the p variable to the animalDiv variable.
    gifDivanimalDiv.append(p);
    // Append the animalImage variable to the animalDiv variable.
    animalImage.append(gifDivanimalDiv)
    // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
    $("#gifs-appear-here").prepend(gifDivanimalDiv);

    // ============= put step 3 in between these dashes ======================

    // ==================================
    // }

  };
});