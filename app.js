/* Todos 
1. Generate a random number between 1 and 20 ✅
2. Get input from the user
3. On click check do the below
    a. no user input = No input value
    b. guess > generated = too high , reduce score by 1
    c. guess < generated = too low, reduce score by 1
    d. guess === generated = guessed correctly, background change
4. setting the highScore
5. Play again
    a. Background Reset
    b. Score reset
*/


// Generating number
let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);

let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;

// Getting the input from the user

// Click events

document.querySelector('.check').style.fontSize = '40px';

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 Give number';
  }



  // before refactoring

  // // guess is high
  // else if (guess > randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost 😑';
  //   }
  // }

  // // guess is low
  // else if (guess < randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost 😑';
  //   }
  // }

  // after refactoring the code
  else if (guess !== randomNumber) {

    // condition ? true block : false block
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost 😑';
    }
    
  }

  // correct guess
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'You guessed Correctly';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = randomNumber;

    // updating the highscore
    if (
      Number(document.querySelector('.score').textContent) >
      Number(document.querySelector('.highscore').textContent)
    ) {
      document.querySelector('.highscore').textContent = Number(
        document.querySelector('.score').textContent
      );
    }
  }
});


// Resetting the game
document.querySelector('.again').addEventListener('click', () => {
  // generate the new random number
  console.log(randomNumber);

  // Hide the random number generated
  document.querySelector('.number').textContent = '?';

  // background color to default
  document.querySelector('body').style.backgroundColor = '#222';

  // set message to start guessing...
  document.querySelector('.message').textContent = 'Start Guessing...';

  // set score to 20
  score = 20;
  document.querySelector('.score').textContent = score;

  // set the input to empty
  document.querySelector('.guess').value = '';
});
