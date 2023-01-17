let codeEl = document.querySelector("#code")
let keyEl = document.querySelector("#key")
  

// TODO: Complete keydown function

function keydownAction(event) {
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  console.log(event.keyCode)
  keyEl.textContent = event.keyCode
 
}

function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
  console.log(event.keyCode)
  codeEl.textContent = event.keyCode
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction)

