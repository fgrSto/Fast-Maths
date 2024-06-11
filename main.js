//#region Const

const _score = document.getElementById("score");
const _bestScore = document.getElementById("b_score");
const _streak = document.getElementById("streak");

const _number1 = document.getElementById("number1");
const _number2 = document.getElementById("number2");
const _number3 = document.getElementById("number3");

const _playerAnswer = document.getElementById("answer");
const _button = document.getElementById("submit");

//#endregion

//#region Let

let score = 0;
let bestScore = 0;
let streak = 0;

let number1 = 0;
let number2 = 0;
let number3 = 0;

let answer = null;
let playerAnswer = null;

let result = false;
let multiplicator = 1;

//#endregion

// Reset all value
function Init() {
  score = 0;
  bestScore = 0;
  streak = 0;
  number1 = 0;
  number2 = 0;
  number3 = 0;
  answer = null;
  playerAnswer = null;
  result = false;
  multiplicator = 1;

  _score.innerHTML = "Score : " + score;
  _bestScore.innerHTML = "Best Score : " + bestScore;
  _streak.innerHTML = "Streak : " + streak;
}

// Calculate
function Calculs() {
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  answer = number1 + number2;
  
  _number1.innerHTML = number1
  _number2.innerHTML = number2
}

function CheckAnswer() {
  playerAnswer = _playerAnswer.value;
  if (answer == playerAnswer) {
    result = true;
  }
  if (answer != playerAnswer) {
    result = false;
  }
}

function Scoring() {
  if (result == true) {
    score = score + 1;
    streak += 1;
  }
  if (result == false) {
    if (score > bestScore) {
      bestScore = score;
    }
    score = 0;
    streak = 0;
  }

  _score.innerHTML = "Score : " + score;
  _bestScore.innerHTML = "Best Score : " + bestScore;
  _streak.innerHTML = "Streak : " + streak;

  Calculs();
}

// Executing functions
Init();
Calculs();

_button.addEventListener("click", (e) => {
  CheckAnswer();
  Scoring();
  _playerAnswer.value = null
});
