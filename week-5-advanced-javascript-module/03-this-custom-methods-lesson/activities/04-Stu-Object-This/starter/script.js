

console.log(this);

//refer to the window (hello this)
function helloThis() {
  console.log('Inside this function, this is ' + this);
}
console.log(this)

//refers to the variable (child age 10)
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};
console.log(child.age)

//refers to initial investment
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
console.log(investor.investment.initialInvestment)