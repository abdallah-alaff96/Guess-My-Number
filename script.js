'use strict';
// document.querySelector('.message').textContent = ' Correct Number!!! ';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20);
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;
document.querySelector('body').style.backgroundColor = '#748';

let reassign = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

let x = function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' No Number !! ';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct No. Congrats :)';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You are lose !';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', x);
document.querySelector('.again').addEventListener('click', reassign);
