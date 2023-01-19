// Use the correct selector `#` to select a button by its ID and not class
var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Function returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Function returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Change the event listener to `click` to make the event trigger on single-click
passwordBtnEl.on('click', function () {
// passwordBtnEl.click(function () {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text("SHHHHH " + newPassword);
});

// To force a click event to be triggered on an element
// call the .click() method without parameters
// passwordBtnEl.click();
