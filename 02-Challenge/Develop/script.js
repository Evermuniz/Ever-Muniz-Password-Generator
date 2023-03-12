// Assignment Code
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input
function writePassword() {

  var passwordArray = []; //Creating a new array for the input to be entered into. I placed the variable here so it clears the array content whenever the function runs
  

do { //repeat this prompt if the while conditions are met
  var range = prompt("How many characters would you like in your password? Choose between 8 and 128."); //prompting user to enter a number between 8 and 128
    if (!range){return}; //if they click cancel then return to the beginning of the function
   
  if (range < 8 ||range>128)  window.alert("Out of range. Try again"); //If the input is less than 8 or greater than 128 then display an alert
  if (isNaN(range))window.alert("Invalid");} //If the input is not a number then display an alert
  while (range <8 || range > 128 || (isNaN(range))); //repeat everything between do...while if the input is out of range or not a number

//declaring all the possible variables to generate the password here
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //especially had to declare this variable after the initial prompt otherwise the numeric prompt returned the range input
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*",];
var options = ["Y", "N", "y", "n"]; //declaring the possible prompt options to define conditions later in the code


do{ //repeat this prompt if the while conditions are met
  var upperCase = prompt("Would you like your password to contain upper case letters? Enter Y or N"); //prompt user for upper case letters in their password
  if (!upperCase){return}; //if they click cancel then return to the beginning of the function
  upperCase = upperCase.toUpperCase(); //convert reponse to upper case for easier conditions later in the code
  if (!options.includes(upperCase)) window.alert ("Invalid");} // if they enter anything besides the array in options then display an alert
while (!options.includes(upperCase)); // repeat everything between do...while if the input is not in the options array
 
  do{ //repeat this prompt if the while conditions are met
    var lowerCase = prompt("Would you like your password to contain lower case letters? Enter Y or N"); //prompt user for lower case letters in their password
    if (!lowerCase){return}; //if they click cancel then return to the beginning of the function
    lowerCase = lowerCase.toUpperCase(); //convert reponse to upper case for easier conditions later in the code
    if (!options.includes(lowerCase)) window.alert ("Invalid");} // if they enter anything besides the array in options then display an alert
  while (!options.includes(lowerCase));// repeat everything between do...while if the input is not in the options array

  do {  //repeat this prompt if the while conditions are met
    var numeric = prompt("Would you like your password to contain numbers? Enter Y or N"); //prompt user for numbers in their password
    if (!numeric){return}; //if they click cancel then return to the beginning of the function
    numeric = numeric.toUpperCase(); //convert reponse to upper case for easier conditions later in the code
    if (!options.includes(numeric)) window.alert ("Invalid");} // if they enter anything besides the array in options then display an alert
  while (!options.includes(numeric));// repeat everything between do...while if the input is not in the options array

  do {  //repeat this prompt if the while conditions are met
    var specialCharacter = prompt("Would you like your password to contain special characters? Enter Y or N"); //prompt user for special characters in their password
    if (!specialCharacter){return}; //if they click cancel then return to the beginning of the function
    specialCharacter = specialCharacter.toUpperCase(); //convert reponse to upper case for easier conditions later in the code
    if (!options.includes(specialCharacter)) window.alert ("Invalid");} // if they enter anything besides the array in options then display an alert
  while (!options.includes(specialCharacter));// repeat everything between do...while if the input is not in the options array

  //if none of the character options are selected then display a message and ask the user if they want to try again. If they confirm then the function starts over
  if (upperCase != "Y" && lowerCase != "Y" && numeric != "Y" && specialCharacter != "Y" ){
  var selectOne = window.confirm("You must select at least one class of characters. Try again?");
  if (selectOne){
  writePassword();
  } else {return}};


for (var i=0; i<(range); i++){ //repeat this loop as many times as the length of the desired password in the range prompt
  if (upperCase === "Y") { //checking if the user wanted upper case letters in their password, if they did then the following will add them to the password array
  var index = Math.floor(Math.random() * upperCaseArray.length) // creating a new variable and selecting a random character in the upperCaseArray 
  var a = upperCaseArray[index] //creating creating new variable with the randomly selected character from the upperCaseArray
  passwordArray.push(a);}; //push the randomly selected character to the password array variable
  

  if (lowerCase === "Y"){ //checking if the user wanted lower case letters in their password, if they did then the following will add them to the password array
  var index = Math.floor(Math.random() * lowerCaseArray.length) // creating a new variable and selecting a random character in the lower case array
  var b = lowerCaseArray[index] //creating creating new variable with the randomly selected character from the lowerCaseArray
  passwordArray.push(b);}; //push the randomly selected character to the password array variable
  

  if (numeric === "Y"){ //checking if the user wanted numbers in their password, if they did then the following will add them to the password array
  var index = Math.floor(Math.random() * numericArray.length) // creating a new variable and selecting a random character in the numericArray
  var c = numericArray[index]; //creating creating new variable with the randomly selected character from the numericArray
  passwordArray.push (c);}; //push the randomly selected character to the password array variable
  

  if (specialCharacter === "Y"){ //checking if the user wanted special characters in their password, if they did then the following will add them to the password array
  var index = Math.floor(Math.random() * specialCharacterArray.length) // creating a new variable and selecting a random character in the specialCharacterArray
  var d = specialCharacterArray[index]; //creating creating new variable with the randomly selected character from the specialCharacterArray
  passwordArray.push(d);}}; //push the randomly selected character to the password array variable


  passwordArray.splice(range); // depending on which options the user selects, the for loop could generate a password longer than the desired length. This will splice it to the desired length


function generatePassword(){ //declaring a new function
  return passwordArray.join(""); //the function will return the passwordArray content and join the array so they are not comma separated 
  };


  var password = generatePassword(); // the value of this variable is the result of the generatePassword function which returns the passwordArray

  var passwordText = document.querySelector("#password"); //this variable inputs the passwordText into the document which displays on the page
  
  passwordText.value = password; //assigns the value to the passwordText variable which comes from the password variable, which comes from the generatePassword function, which comes from the writePassword function

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //event listener to trigger the generatePassword function

