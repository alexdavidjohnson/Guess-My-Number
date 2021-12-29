'use strict';

// BUG NOTE FIXME TODO

// Selecting a class / id from html
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `Correct Number!`;

// Manipulate the value of a class or div
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// Manipulate the value of an input
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Generate a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1; // to see the boundaries of the random number
// document.querySelector('.number').textContent = secretNumber;
// Declare the score
let score = 20; // can be called a variable of the appication state
// Decclare highscore
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener on the "check" button
document.querySelector('.check').addEventListener('click', function () {
  // Store the input value of the user
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage(`🚨 No Number`);

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage(`🥳 You Win!!`);
    // Change the background color when you win
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change the style of number background
    document.querySelector('.number').style.width = '30rem';
    // Show the secret number
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too High` : `📉 Too Low`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`😭 You Lost`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// Restore to the initial conditions
document.querySelector('.again').addEventListener('click', function () {
  // Re declare the score value
  score = 20;
  // Initiate the random number again
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset the start guessing message
  displayMessage(`Start guessing...`);
  // Reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
  // Reset the width of the ? container
  document.querySelector('.number').style.width = '15rem';
  // Reset the score to 20
  document.querySelector('.score').textContent = score;
  // Reset the number in box
  document.querySelector('.number').textContent = '?';
  // Reset the input
  document.querySelector('.guess').value = '';
});
