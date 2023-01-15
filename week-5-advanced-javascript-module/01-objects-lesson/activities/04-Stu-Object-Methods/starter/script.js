//WRITE YOUR CODE BELOW
let menu = {
   blackcoffee:5,
  cappuccino:7,
  latte:6
}
let prices = Object.values(menu)
console.log(prices);

// for loop to add to total
let total = 0
for (let I = 0 < prices.length; i++) {
    total += prices[I]
}

console.log("total of menu items " + total );





