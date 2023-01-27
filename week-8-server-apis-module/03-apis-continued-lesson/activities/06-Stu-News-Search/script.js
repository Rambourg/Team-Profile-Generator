// function clear search form
function clearResults() {
    //clear search fields
    $("#search-term").val("");
    $("#records").val("1");
    $("#start-year").val("");
    $("#end-year").val("")


// to clear the search results
$("#search-results").empty();
$("#results-section").attr("class", "hide")
};

//function fire when search is clicked
$("#searchBtn").on("click", function (event) {
    event.preventDefault();

    //HTML variables
    let searchTerm = $("search-term").val().trim();
    let numberOfRecords
    
}
