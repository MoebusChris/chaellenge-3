// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  let smLttrs = 'abcdefghijklmnopqrstuvwxyz';
  let capLttrs = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let nbrs = '1234567890';
  let spChars = '~!@#$%^&*()_+{}:?><;.,';
  let password = '';
  let avalChars = '';

  let pwLength = prompt('Please indicate a password length between 8 and 128');

  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength);
  } else {
    alert('Your password should be at least 8, no more than 128');
    return;
  }

  let qrySmLttrs = confirm('Do you want to use lower cases?')
  let qryCapLttrs = confirm('Do you want to use upper cases?')
  let qryNbrs = confirm('do you want to use number?')
  let qrySpChars = confirm('Do you want to use special characters?')

  
if (qrySmLttrs) {avalChars += smLttrs}
if (qryCapLttrs) {avalChars += capLttrs}
if (qryNbrs) {avalChars += nbrs}
if (qrySpChars) {avalChars += spChars}

if (
  !qrySmLttrs && !qryCapLttrs && qryNbrs && qrySpChars
) {
  return alert('please select at least one criteria.')
}

  for (let i = 0; i < pwLength; i++) {
    password +=avalChars[Math.floor(Math.random () * avalChars.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
