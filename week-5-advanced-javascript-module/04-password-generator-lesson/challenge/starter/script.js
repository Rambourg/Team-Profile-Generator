// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password

const numericCharacters = ["0", "1", "2", "3", "4", "3", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//STRINGS CONCATENATION
let characteresNumbersLowerUpperCase = specialCharacters.concat(numericCharacters,lowerCasedCharacters,upperCasedCharacters);
console.log(characteresNumbersLowerUpperCase)


// Function to prompt user for password options
function getPasswordOptions() {
  let password = ""
  for (let characteresNumbersLowerUpperCase = 0; characteresNumbersLowerUpperCase < length; characteresNumbersLowerUpperCase++) {
    return password
  }
    console.log(password)



// Function for getting a random element from an array
function getRandom(arr) {
  let randomNumber = " ";
  for (let randomNumber = 0; randomNumber < characteresNumbersLowerUpperCase.length; randomNumber++) {
    randomNumber.push(Math.florr(math.random()*characteresNumbersLowerUpperCase))
    return randomNumber;
    
    
  }
  console.log(randomNumber)


  

    }

// Function to generate password with user input
 
  function userInput() {
  let userInput = characteresNumbersLowerUpperCase;
  if (characteresNumbersLowerUpperCase === 0) {
    alert("Please type your password");
    return Choose;
  }

  for (let generatePassword = 0; generatePassword < characteresNumbersLowerUpperCase.length; generatePassword++) {
    const element = characteresNumbersLowerUpperCase[generatePassword];
     //display password/page
     return "Generated Password";
    
  }

  

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
 let passwordGenerator = characteresNumbersLowerUpperCase;

generatePassword.addEventListener('click', e => {
 

})}
