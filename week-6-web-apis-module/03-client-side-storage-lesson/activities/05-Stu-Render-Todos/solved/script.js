var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Teach HTML", "Teach CSS", "Teach JavaScrpit"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    // create a variable that stores the "current" todo
    var todo = todos[i];

    // create a li element (list item) that we will append to our list later
    var li = document.createElement("li"); // <li></li>

    // set the text of the list item to be the value of todo
    li.textContent = todo;   // <li>Teach  HTML</li>

    // make this the last child of the todoList, which is the <ul> on our page
    // BEFORE:
    //    <ul></ul>
    // AFTER:
    //    <ul>
    //      <li>Teach  HTML</li>
    //      <li>Teach  CSS</li>
    //    </ul>
    todoList.appendChild(li);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});
