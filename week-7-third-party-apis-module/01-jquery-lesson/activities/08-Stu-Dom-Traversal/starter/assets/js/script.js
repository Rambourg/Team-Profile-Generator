// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
$("li").css("background-color", "white");

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
$("ul").eq(1).children().eq(2).text("y")