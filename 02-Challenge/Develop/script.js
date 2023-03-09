// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*",];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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

  var specialCharacter = prompt("Would you like your password to contain special characters? Enter Y or N")
    console.log(specialCharacter);

  var index = Math.floor(Math.random() * specialCharacterArray.length)
  var computer = specialCharacterArray[index];

  if (specialCharacter ==="Y") {window.alert(computer);}
  

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  


  // passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

