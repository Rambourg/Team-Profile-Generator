// Luxury Tax

var player1 = 20235406;
var player2 = 15000000;
var player3 = 25000000;
var tax;
var maxSalary = 40000000;
var taxRate = 0.18;

var total = player1 + player2 + player3;

console.log('The total for all three players is: $' + total);  //.toLocaleString("en-GB"));

if (total > maxSalary) {
  var overage = total - maxSalary;
  tax = overage * taxRate;
  console.log('Your team owes a luxury tax in the amount of: $' + tax); //.toLocaleString("en-GB"));
} else {
  console.log('You don\'t value your fanbase enough.');
}

// calculate team total expenses - annual
// var totalExpenses = total + tax + ... + ... + ... + ...maxSalary;

// PEBKAC
// Problem Exists Between Keyboard And Chair

// 4,294,967,295 = 2^32 - 1