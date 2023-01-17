var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = JSON.parse(localStorage.getItem("todos")) || ["Learn HTML", "Learn CSS"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;

    li.setAttribute("data-index", i)

    let button = document.createElement("button")
    button.textContent = "Complete";

    li.appendChild(button)

    


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
  localStorage.setItem("todos" (JSON.stringify(todos)))

});


todoList.addEventListener("click", function(event){
  
  
  if(event.target.matches("button")){
    
    
    let removeIndex = event.target.parentElement.getAttribute("data-index")

    todos.splice(removeIndex, 1)
   
    renderTodos();

}


})
