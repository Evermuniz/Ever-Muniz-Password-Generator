// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*",];

  

// Write password to the #password input
function writePassword() {

  var passwordArray = [];

  var length = prompt("How many characters would you like in your password? Choose between 8 and 128.");
    if (!length){return};

  if (length < 8 ||length>128) {
  var tryAgain = window.confirm("Out of range. Try again?")
    if (tryAgain){
      writePassword();
    }
    else {return};
  };

do{
  var upperCase = prompt("Would you like your password to contain upper case letters? Enter Y or N")
  if (!upperCase){return};
  upperCase = upperCase.toUpperCase();
  if (upperCase != "Y") window.alert ("Invalid");}
  while (upperCase != "Y"); 
 
  var lowerCase = prompt("Would you like your password to contain lower case letters? Enter Y or N")
    if (!lowerCase){return};
    lowerCase = lowerCase.toUpperCase();

  var numeric = prompt("Would you like your password to contain numbers? Enter Y or N")
    if (!numeric){return};
    numeric = numeric.toUpperCase();

  var specialCharacter = prompt("Would you like your password to contain special characters? Enter Y or N")
    if (!specialCharacter){return};
    specialCharacter = specialCharacter.toUpperCase();

  if (upperCase != "Y" && lowerCase != "Y" && numeric != "Y" && specialCharacter != "Y" ){
  var selectOne = window.confirm("You must select at least one class of characters. Try again?")
    if (selectOne){
      writePassword();
    } else {return}};


    for (var i=0; i<(length); i++){
  if (upperCase === "Y") {
  var index = Math.floor(Math.random() * upperCaseArray.length)
  var a = upperCaseArray[index]
  passwordArray.push(a);};
  

  if (lowerCase === "Y"){
  var index = Math.floor(Math.random() * lowerCaseArray.length)
  var b = lowerCaseArray[index]
  passwordArray.push(b);};
  

  if (numeric === "Y"){
  var index = Math.floor(Math.random() * numericArray.length)
  var c = numericArray[index];
  passwordArray.push(c);};
  

  if (specialCharacter === "Y"){
  var index = Math.floor(Math.random() * specialCharacterArray.length)
  var d = specialCharacterArray[index];
    passwordArray.push(d);}};


  passwordArray.splice(length);


function generatePassword(){ 
    return passwordArray.join(""); 

  };


  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

