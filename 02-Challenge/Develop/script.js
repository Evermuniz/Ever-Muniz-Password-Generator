// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var length = prompt("How many characters would you like in your password? Choose between 8 and 128.")
    console.log(length);

  var lowerCase = prompt("Would you like your password to contain lower case letters? Enter Y or N")
    console.log(lowerCase);

  var upperCase = prompt("Would you like your password to contain upper case letters? Enter Y or N")
    console.log(upperCase);

  var numeric = prompt("Would you like your password to contain numbers? Enter Y or N")
    console.log(numeric);

  var specialCharacters = prompt("Would you like your password to contain special characters? Enter Y or N")
    console.log(specialCharacters);

  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

