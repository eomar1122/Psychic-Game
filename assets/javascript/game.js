// VARIABLES
// ==========================================================================

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterToGuess = null;
var availableChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];

// FUNCTIONS
// ==============================================================================

// Update the letter that user needs to guess randomly
function updateLetterToGuess() {
  this.letterToGuess = this.availableChoices[Math.floor(Math.random() * this.availableChoices.length)];
};


// Display all the user guess on the HTML page in a list.
function updateGuessesSoFar() { 
  document.getElementById("userGussedLetter").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Update the guesses number left for user
function updateGuessesLeft() {
  document.getElementById("guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

// Letters validation function
function validate(strValue) {
  // console.log("Validation function");
  var objRegExp = /^[a-zA-Z ]+$/;
  // console.log("objRegExp "+ objRegExp.test(strValue));
  return objRegExp.test(strValue);
}


// Reset function
function reset() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}


// MAIN PROCESS
// ==============================================================================

// Call this function to update the computer guess letter to start new game
updateLetterToGuess();
// Call this function to reset the user guess left counter to 9
updateGuessesLeft();

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var validateKey = validate(userGuess); 
  // console.log("validateKey " + validateKey);

  // Check if the input is letter or something else
  if (validateKey) {

    //Decrement the number of guesses left by 1
    guessesLeft--;
    // Add the user guessed letter to the user guessed list.
    guessedLetters.push(userGuess);

    //The computer will randomly choose a letter from the list of letters in the availableChoices array and save it to computerGuess variable.
  	var computerGuess = availableChoices[Math.floor(Math.random() * availableChoices.length)];

    updateGuessesLeft();
    updateGuessesSoFar();
    	// Check if number of guessesLeft are greater than 0.
      if (guessesLeft > 0){
         	// Check if user guess is equal to computer guess.
          if (userGuess == letterToGuess){
             	// If true increment wins by 1. 
              wins++;
              // Update the wins counter on the HTML page.
              document.getElementById("wins").innerHTML = "Wins: " + wins;
              alert("You win!");
              // Call reset function to start a new game.
              reset();
              }
          } else {
              //  
              losses++;
              // Update the losses counter on the HTML page.
              document.getElementById("losses").innerHTML = "Losses: " + losses;
              alert("You loss!");
              // Call reset function to start a new game.
              reset();
          }
  } else {
        alert(userGuess + " is not a letter. Please select a letter from [a-z]!");
    }
};

