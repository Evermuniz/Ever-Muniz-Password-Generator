// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*",];
var passwordArray = [];

// Write password to the #password input
function writePassword() {

  
  var length = prompt("How many characters would you like in your password? Choose between 8 and 128.");
    if (!length){return};

  if (length < 8 ||length>128) {
  var tryAgain = window.confirm("Out of range. Try again?")
    if (tryAgain){
      writePassword();
    }
    else {return};
  };
  
  var lowerCase = prompt("Would you like your password to contain lower case letters? Enter Y or N")
    if (!lowerCase){return};

  var upperCase = prompt("Would you like your password to contain upper case letters? Enter Y or N")
    if (!upperCase){return};

  var numeric = prompt("Would you like your password to contain numbers? Enter Y or N")
    if (!numeric){return};

  var specialCharacter = prompt("Would you like your password to contain special characters? Enter Y or N")
    if (!specialCharacter){return};

  
  if (upperCase === "Y" || "y'")
  for (var i=0; i<length; i++){
  var index = Math.floor(Math.random() * upperCaseArray.length)
  var a = upperCaseArray[index];
  if (upperCase != "Y") {a = ""};

  if (lowerCase === "Y")
  var index = Math.floor(Math.random() * lowerCaseArray.length)
  var b = lowerCaseArray[index];
  if (lowerCase != "Y") {b = ""};

  if (numeric === "Y")
  var index = Math.floor(Math.random() * numericArray.length)
  var c = numericArray[index];
  if (numeric != "Y") {c = ""};

  if (specialCharacter === "Y")
  var index = Math.floor(Math.random() * specialCharacterArray.length)
  var d = specialCharacterArray[index];
  if (specialCharacter != "Y") {d = ""};

    if (upperCase != "Y" && lowerCase != "Y" && numeric != "Y" && specialCharacter != "Y" )
    var selectOne = window.confirm("You must select at least one class of characters")
    if (selectOne){
      writePassword();
    };

  passwordArray.push(a+b+c+d)}

  function generatePassword(){ 
    return passwordArray.join("");
  };


  var password = generatePassword();




  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

