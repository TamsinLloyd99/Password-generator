// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

let randomLowerCase;
let randomUpperCase;
let randomNumerals;
let randomSpecialCharacters;
let randomPassword;

// Function to prompt user for password options
function getPasswordOptions() {
  let length = prompt ("How many letters would you like your password to be?");

  if (length <= 8){
    alert ("Please pick a number higher than 8.");
    getPasswordOptions();
  } else if (length >= 128){
    alert ("Please pick a number less than 128.");
    getPasswordOptions();
  }//User inputs under/equal to 8 or over/equal to 128 are invalid ^^
  alert ("You have chosen to generate a password that is " + length + " characters long!");

  let characterType = prompt ("Please pick the special characters you would like to include in your password.\n A.) Lowercase B.) Uppercase C.) Numeric \n D.) Special characters ($@%&*, etc.)");
  //Save users character type choice as a variable ^^

  let upperCaseAnswer = characterType.toUpperCase();
  //makes sure user input is changed to capital letters (if not already)
  let lowerCaseChoice;
  let upperCaseChoice;
  let numericChoice;
  let specialCharactersChoice;
  let selectedCharacterTypes = [];
//declare variables/array to be used in if statements below^^

  if (upperCaseAnswer.includes("A")){
    selectedCharacterTypes.push("Upper Case");
    lowerCaseChoice = alert ("You have chosen to use Lower Case letters to make up your password");
// if the user input contains "A", the string^^ will be pushed to the array selectedCharacterTypes, to be used later.
// .includes checks user input instead of upperCaseAnswer === "A"
  } if (upperCaseAnswer.includes("B")){
    selectedCharacterTypes.push("Lower Case");
    upperCaseChoice = alert ("You have chosen to use Upper Case letters to make up your password");
  } if (upperCaseAnswer.includes("C")){
    selectedCharacterTypes.push("Numerals");
    numericChoice = alert ("You have chosen to use Numerals to make up your password");
  } if (upperCaseAnswer.includes("D")){
    selectedCharacterTypes.push("Special Characters");
    specialCharactersChoice = alert("You have chosen to use Special Characters to make up your password");
  }
  console.log("Selected Character types" , selectedCharacterTypes);
  return length;
//used to check working code
}



// Function for getting a random element from an array
function getRandom(arr) {
let randomValue;

  if (selectedCharacterTypes.includes ("Lower Case")){
    randomLowerCase = Math.floor(Math.random() * lowerCasedCharacters.length);   
    randomValue = lowerCasedCharacters[randomLowerCase];
  }
  if (selectedCharacterTypes.includes ("Upper Case")){
    randomUpperCase = Math.floor(Math.random() * upperCasedCharacters.length);
    randomValue = upperCasedCharacters[randomUpperCase];
  }
  if (selectedCharacterTypes.includes ("Numerals")){
    randomNumerals = Math.floor(Math.random() * numericCharacters.length);
    randomValue = numericCharacters[randomNumerals];
  }
  if (selectedCharacterTypes.includes ("Special Characters")){
    randomSpecialCharacters = Math.floor(Math.random() * specialCharacters.length);
    randomValue = specialCharacters[randomSpecialCharacters];
  }
console.log(randomValue);
return randomValue;
}  


// Function to generate password with user input
function generatePassword(length) {
  randomPassword = getRandom(length);
  console.log(randomPassword);
}
const passwordLength = getPasswordOptions();
generatePassword(passwordLength);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// getPasswordOptions();