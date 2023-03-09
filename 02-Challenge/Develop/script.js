// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*",];
var passwordArray = [];

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


  
  if (upperCase === "Y")
  for (var i=0; i<length; i++){
  var index = Math.floor(Math.random() * upperCaseArray.length)
  var a = upperCaseArray[index];

  if (lowerCase === "Y")
  var index = Math.floor(Math.random() * lowerCaseArray.length)
  var b = lowerCaseArray[index];

  if (numeric === "Y")
  var index = Math.floor(Math.random() * numericArray.length)
  var c = numericArray[index];

  if (specialCharacter === "Y")
  var index = Math.floor(Math.random() * specialCharacterArray.length)
  var d = specialCharacterArray[index];

  passwordArray.push(a+b+c+d)}

// function shuffleArray (passwordArray){
//     for (var i= passwordArray.length - 1; i>0; i--){
//       var j = math.floor(Math.random()*(i +1));
//       var temp = passwordArray [i];
//       passwordArray [i] = passwordArray [j];
//       passwordArray[j] = temp;}}



//   shuffleArray();


  function generatePassword(){ 
    return passwordArray.join("");
  };


  var password = generatePassword();




  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

