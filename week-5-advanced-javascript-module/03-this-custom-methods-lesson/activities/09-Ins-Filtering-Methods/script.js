// var numbers = [2, 4, 6, 8, 10, 12];

// var planets = [
//   {
//       name: 'Earth',
//       moons: 1
//   },
//   {
//       name: 'Mars',
//       moons: 2
//   },
//   {
//       name: 'Jupiter',
//       moons: 79
//   },
//   {
//       name: 'Saturn',
//       moons: 82
//   }
// ];

// // Filtering Methods

// // Find
// console.log(numbers.find(function(i) {
//   return i > 10
// }))

// console.log(planets.find(function(i) {
//   return i.moons > 10
// }))

// // Filter
// console.log(numbers.filter(function(i) {
//   return i >= 10
// }))

// console.log(planets.filter(function(i) {
//   return i.moons > 10
// }))


let accounts = [
  {firstName: "testFirst1", lastName: "testLast1" ,balance:200000},
  {firstName: "bestFirst2", lastName: "bestLast2" ,balance:250000},
  {firstName: "testFirst3", lastName: "testLast3" ,balance:350000},
  ]

 
  accounts.find(function(account) {
    return account.balance === 250000
    
  })
  console.log(accounts)

  accounts.filter(function(account) {
    return account.lastName.startsWith("t")
    
  })
  console.log(accounts)