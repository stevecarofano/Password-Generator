var generateBtn = document.querySelector("#generate");
var number = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!'()*+,-./:;<=>?@[\]^_`{|}~";
var length = 0;
var charSet = "";  // Variable to store character set
var retVal = "";
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  function generatePassword() {
        var passLength = prompt("Please choose a password length between 8 and 128 characters");
            if (passLength < 8 || passLength > 128) {
                alert ("Please choose a valid password length");
                    generatePassword(); 
                }
        var passUpper = confirm("Would you like to include uppercase characters?\nOK for yes, CANCEL for no");
                if (passUpper === true) {
                    charSet = upper;
                } else {
                    charSet = "";
                }
        var passLower = confirm("Would you like to include lowercase characters?\nOK for yes, CANCEL for no");
                if (passLower === true) {
                    charSet = lower + upper;
                    console.log(charSet);
                } else {
                    charSet = passUpper;
                }
            for (var i = 0, n = charSet.length; i < length; ++i) {
            retVal += charSet.charAt(Math.floor(Math.random() * n));
            }
    }
            return retVal;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
