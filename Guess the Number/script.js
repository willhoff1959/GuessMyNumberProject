'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Math.random gives a decimal number between 0 and < 1. Then we truncate it and add 1 to get to 20. The number is hidden behind the question mark.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Creat function to help keep code DRY
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// LEVEL 0
document.querySelector('.check').addEventListener('click', function () {
  // LEVEL 1
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    // LEVEL 2
    displayMessage('⛔ No number!');
  } // END LEVEL 2

  // When player wins
  else if (guess === secretNumber) {
    // LEVEL 2
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      // LEVEL 3
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } // END LEVEL 3
  } // END LEVEL 2

  // When guess is wrong
  else if (guess !== secretNumber) {
    // LEVEL 2
    if (score > 1) {
      // LEVEL 3
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } // END LEVEL 3
    else {
      // LEVEL 3
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    } // END LEVEL 3
  } // END LEVEL 2
}); // END LEVEL 1

// Reset game
document.querySelector('.again').addEventListener('click', function () {
  // LEVEL 1
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}); // END LEVEL 1
