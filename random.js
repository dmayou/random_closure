// Guess a random number
function guessANumber(upperBound, maxGuesses) {
  let secret, guessesLeft;
  checkGuess(null); // init secret and guessesLeft
  function checkGuess(guess) {
    if (secret === undefined) {
       secret = Math.floor(Math.random() * upperBound) + 1;
       guessesLeft = maxGuesses;
    } else {
      if (guess === secret && guessesLeft > 0) {
        return true;
      } else {
        guessesLeft--;
        return false;
      }
    }
  }
  return {
    guess: g => checkGuess(g) ? 'you\'re right!' : 'try again!',
    left: () => `${guessesLeft} more guesses`,
    hint: () => `psst, it\'s ${secret}`
  }
}

// make two new objects that each represent a different instance of
// a guessing game
let guessing1 = guessANumber(10,4);
let guessing2 = guessANumber(100,6);

// You'll see that they each have different values in closure
console.dir(guessing1, guessing2);
console.log(guessing1.left(), guessing2.left());
console.log(guessing1.guess(5));
// Now the number of guesses has fallen for guessing1, but not guessing2
console.log(guessing1.left(), guessing2.left());
// different 'secret' values for each instance
console.log(guessing1.hint(), guessing2.hint());
