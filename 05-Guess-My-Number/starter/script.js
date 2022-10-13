'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};
const backgroundChange = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//Check btn Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  backgroundChange('#222');
  numberWidth('15rem');
  displayGuess('');
});
// Check btn Check!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When no input
  if (!guess) {
    displayMessage('No Number!');
    // Win game
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);
    backgroundChange('#60b347');
    numberWidth('30rem');
    if (score >= highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Another number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lose the game!');
      displayScore(0);
    }
  }
});
