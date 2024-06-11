// Const of scores
const _score = document.getElementById("score");
const _bestScore = document.getElementById("b_score");
const _streak = document.getElementById("streak");
// Const of random numbers
const _number1 = document.getElementById("number1");
const _number2 = document.getElementById("number2");
const _number3 = document.getElementById("number3");
// Const of answer
const _playerAnswer = document.getElementById("answer");
const _button = document.getElementById("submit");

// Variable of scores
let score = 0;
let bestScore = 0;
let streak = 0;
// Variable of random numbers
let number1 = 0;
let number2 = 0;
let number3 = 0;
let answer = null;
let playerAnswer = null;
let multiplicator = 1;

function VerifyAnswer() {
  playerAnswer = _playerAnswer.value;
  if (answer == playerAnswer) {
    console.log("w");
    score = score * multiplicator + 1;
    _score.innerHTML = "Score : " + score;
    console.log(score);
  } else {
    GameOver();
    BestScore();
    score = 0;
    multiplicator = 1;
  }
}

answer = number1 + number2;
console.log("answer = " + answer);

_score.innerHTML = "Score : " + score;
_number1.innerHTML = number1;
_number2.innerHTML = number2;
_number3.innerHTML = number3;

_button.addEventListener("click", (e) => {
  VerifyAnswer();
});
