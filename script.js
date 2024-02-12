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

// Function to prompt user for password options
function getPasswordOptions() {
  var alertText = "Password Requirements:\n";
  alertText += " - At least 8 characters but no more than 128.\n";
  alertText += "Character types:\n";
  alertText += " - Lowercase\n";
  alertText += " - Uppercase\n";
  alertText += " - Numeric\n";
  alertText += " - Special characters ($@%&*, etc)";
    
  alert(alertText);

  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128):"));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a valid number between 8 and 128.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  var selectedChars = [];
  if (includeLowercase) selectedChars.push(lowerCasedCharacters);
  if (includeUppercase) selectedChars.push(upperCasedCharacters);
  if (includeNumeric) selectedChars.push(numericCharacters);
  if (includeSpecial) selectedChars.push(specialCharacters);

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }
  return [passwordLength, selectedChars];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function for getting random value from array of array
function getRandomFromArrayOfArray(arr) {
  var randomRowIndex = Math.floor(Math.random() * arr.length);
  var randomRow = arr[randomRowIndex];
  var randomCharIndex = Math.floor(Math.random() * randomRow.length);
  return randomRow[randomCharIndex];
}


// Function to generate password with user input
function generatePassword() {  
  var passwordOptions = getPasswordOptions()

  if (passwordOptions) {
    var passwordLength = passwordOptions[0]
    var selectedChars = passwordOptions[1]
  } else {
    return
  }
  
  var password = "";

  for (var i = 0; i < selectedChars.length; i++) {
    password += getRandom(selectedChars[i])
  }

  for (var i = 0; i < passwordLength - selectedChars.length; i++) {
    password += getRandomFromArrayOfArray(selectedChars);
  }
  
  return password;
}

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