//#region Const

const _score = document.getElementById("score");
const _bestScore = document.getElementById("b_score");
const _streak = document.getElementById("streak");
const _bestStreak = document.getElementById("b_streak");
const _level = document.getElementById("level");

const _number1 = document.getElementById("number1");
const _number2 = document.getElementById("number2");
const _number3 = document.getElementById("number3");
const _sign1 = document.getElementById("sign1");
const _sign2 = document.getElementById("sign2");

const _playerAnswer = document.getElementById("answer");

const _health = document.getElementById("health");
const _difficulty = document.getElementById("difficulty");

const _cloack = document.getElementById("cloak");
const _cloackBtn = document.getElementById("cloack_btn");

//#endregion

//#region Let

let score = null;
let bestScore = null;
let streak = null;
let bestStreak = null;
let level = null;

let number1 = null;
let number2 = null;
let number3 = null;
let isnumber3 = null;
let sign1 = null;
let sign2 = null;

let answer = null;
let playerAnswer = null;

let difficulty = null;

let result = null;
let healthMultiplicator = null;
let difficultyMultiplicator = null;

//#endregion

// Calculate
function Calculs() {
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  number3 = Math.floor(Math.random() * 100);

  sign1 = Math.floor(Math.random() * 2);
  sign2 = Math.floor(Math.random() * 2);

  switch (difficulty) {
    case 1:
      isnumber3 = 0;
      if (sign1 == 0) {
        if (number1 < number2) {
          number3 = number2;
          number2 = number1;
          number1 = number3;
        }
        answer = number1 - number2;
      }
      if (sign1 == 1) {
        answer = number1 + number2;
      }
      break;

    case 2:
      isnumber3 = Math.floor(Math.random() * 2);
      if (isnumber3 == 0) {
        if (sign1 == 1) {
          answer = number1 + number2;
        }
        if (sign1 == 0) {
          answer = number1 - number2;
        }
      }
      if (isnumber3 == 1) {
        if (sign1 == 1) {
          if (sign2 == 1) {
            answer = number1 + number2 + number3;
          }
          if (sign2 == 0) {
            answer = number1 + number2 - number3;
          }
        }
        if (sign1 == 0) {
          if (sign2 == 1) {
            answer = number1 - number2 + number3;
          }
          if (sign2 == 0) {
            answer = number1 - number2 - number3;
          }
        }
      }
      break;

    case 3:
      sign1 = Math.floor(Math.random() * 3);
      if (sign1 == 0) {
        isnumber3 = Math.floor(Math.random() * 2);
        if (isnumber3 == 0) {
          answer = number1 - number2;
        }
        if (isnumber3 == 1) {
          if (sign2 == 0) {
            answer = number1 - number2 - number3;
          }
          if (sign2 == 1) {
            answer = number1 - number2 + number3;
          }
        }
      }
      if (sign1 == 1) {
        isnumber3 = Math.floor(Math.random() * 2);
        if (isnumber3 == 0) {
          answer = number1 + number2;
        }
        if (isnumber3 == 1) {
          if (sign2 == 0) {
            answer = number1 + number2 - number3;
          }
          if (sign2 == 1) {
            answer = number1 + number2 + number3;
          }
        }
      }
      if (sign1 == 2) {
        isnumber3 = 0;
        answer = number1 * number2;
      }
      break;

    case 4:
      sign1 = Math.floor(Math.random() * 3);
      sign2 = Math.floor(Math.random() * 3);

      if (sign1 == 0) {
        if (sign2 == 0) {
          number1 = Math.floor(Math.random() * 1000);
          number2 = Math.floor(Math.random() * 1000);
          number3 = Math.floor(Math.random() * 1000);
          answer = number1 - number2 - number3;
        }
        if (sign2 == 1) {
          number1 = Math.floor(Math.random() * 1000);
          number2 = Math.floor(Math.random() * 1000);
          number3 = Math.floor(Math.random() * 1000);
          answer = number1 - number2 + number3;
        }
        if (sign2 == 2) {
          number1 = Math.floor(Math.random() * 1000);
          answer = number1 - number2 * number3;
        }
      }
      if (sign1 == 1) {
        if (sign2 == 0) {
          number1 = Math.floor(Math.random() * 1000);
          number2 = Math.floor(Math.random() * 1000);
          number3 = Math.floor(Math.random() * 1000);
          answer = number1 + number2 - number3;
        }
        if (sign2 == 1) {
          number1 = Math.floor(Math.random() * 1000);
          number2 = Math.floor(Math.random() * 1000);
          number3 = Math.floor(Math.random() * 1000);
          answer = number1 + number2 + number3;
        }
        if (sign2 == 2) {
          number1 = Math.floor(Math.random() * 1000);
          answer = number1 + number2 * number3;
        }
      }
      if (sign1 == 2) {
        if (sign2 == 0) {
          number3 = Math.floor(Math.random() * 1000);
          answer = number1 * number2 - number3;
        }
        if (sign2 == 1) {
          number3 = Math.floor(Math.random() * 1000);
          answer = number1 * number2 + number3;
        }
        if (sign2 == 2) {
          isnumber3 = 0;
          answer = number1 * number2;
        }
      }
      break;

    case 5:
      sign1 = Math.floor(Math.random() * 3);
      sign2 = Math.floor(Math.random() * 3);
      number1 = 0;
      number2 = 0;
      number3 = 0;

      if (sign1 == 0) {
        if (sign2 == 0) {
          while (number1 < 100) {
            number1 = Math.floor(Math.random() * 1000);
          }
          while (number2 < 100) {
            number2 = Math.floor(Math.random() * 1000);
          }
          while (number3 < 100) {
            number3 = Math.floor(Math.random() * 1000);
          }
          answer = number1 - number2 - number3;
        }
        if (sign2 == 1) {
          while (number1 < 100) {
            number1 = Math.floor(Math.random() * 1000);
          }
          while (number2 < 100) {
            number2 = Math.floor(Math.random() * 1000);
          }
          while (number3 < 100) {
            number3 = Math.floor(Math.random() * 1000);
          }
          answer = number1 - number2 + number3;
        }
        if (sign2 == 2) {
          while (number1 < 100) {
            number1 = Math.floor(Math.random() * 1000);
          }
          while (number2 < 10) {
            number2 = Math.floor(Math.random() * 100);
          }
          while (number3 < 10) {
            number3 = Math.floor(Math.random() * 100);
          }
          answer = number1 - number2 * number3;
        }
      }
      if (sign1 == 1) {
        if (sign2 == 0) {
          while (number1 < 100) {
            number1 = Math.floor(Math.random() * 1000);
          }
          while (number2 < 100) {
            number2 = Math.floor(Math.random() * 1000);
          }
          while (number3 < 100) {
            number3 = Math.floor(Math.random() * 1000);
          }
          answer = number1 + number2 - number3;
        }
        if (sign2 == 1) {
          while (number1 < 100) {
            number1 = Math.floor(Math.random() * 1000);
          }
          while (number2 < 100) {
            number2 = Math.floor(Math.random() * 1000);
          }
          while (number3 < 100) {
            number3 = Math.floor(Math.random() * 1000);
          }
          answer = number1 + number2 + number3;
        }
        if (sign2 == 2) {
          while (number1 < 100) {
            number1 = Math.floor(Math.random() * 1000);
          }
          while (number2 < 10) {
            number2 = Math.floor(Math.random() * 100);
          }
          while (number3 < 10) {
            number3 = Math.floor(Math.random() * 100);
          }
          answer = number1 + number2 * number3;
        }
      }
      if (sign1 == 2) {
        if (sign2 == 0) {
          while (number1 < 10) {
            number1 = Math.floor(Math.random() * 100);
          }
          while (number2 < 10) {
            number2 = Math.floor(Math.random() * 100);
          }
          while (number3 < 100) {
            number3 = Math.floor(Math.random() * 1000);
          }
          answer = number1 * number2 - number3;
        }
        if (sign2 == 1) {
          while (number1 < 10) {
            number1 = Math.floor(Math.random() * 100);
          }
          while (number2 < 10) {
            number2 = Math.floor(Math.random() * 100);
          }
          while (number3 < 100) {
            number3 = Math.floor(Math.random() * 1000);
          }
          answer = number1 * number2 + number3;
        }
        if (sign2 == 2) {
          while (number1 < 10) {
            number1 = Math.floor(Math.random() * 100);
          }
          while (number2 < 10) {
            number2 = Math.floor(Math.random() * 100);
          }
          while (number3 < 10) {
            number3 = Math.floor(Math.random() * 100);
          }
          answer = number1 * number2 * number3;
        }
      }
      break;
  }

  _number1.innerHTML = number1;
  _number2.innerHTML = number2;
  _number3.innerHTML = number3;

  if (isnumber3 == 0) {
    _number3.classList.add("hidden");
    _sign2.classList.add("hidden");
  }
  if (isnumber3 == 1) {
    _number3.classList.remove("hidden");
    _sign2.classList.remove("hidden");
  }

  if (sign1 == 0) {
    _sign1.innerHTML = "-";
  }
  if (sign1 == 1) {
    _sign1.innerHTML = "+";
  }
  if (sign1 == 2) {
    _sign1.innerHTML = "*";
  }
  if (sign2 == 0) {
    _sign2.innerHTML = "-";
  }
  if (sign2 == 1) {
    _sign2.innerHTML = "+";
  }
  if (sign2 == 2) {
    _sign2.innerHTML = "*";
  }

  console.log("answer for calcul n°" + (streak + 1) + " = " + answer);
}

// Check if the answer is right
function CheckAnswer() {
  playerAnswer = _playerAnswer.value;
  if (answer == playerAnswer) {
    result = true;
  }
  if (answer != playerAnswer) {
    result = false;
  }
}

// Manage all scoring systeme
function Scoring() {
  if (result == true) {
    score = score + (1 * healthMultiplicator + difficultyMultiplicator);
    streak++;
    level = Math.floor(streak / 10 + 1);
    //Add lifeblood
    _score.innerHTML = "Score : " + score;
    _streak.innerHTML = "Streak : " + streak;
    _level.innerHTML = "Level : " + level;
  }
  if (result == false) {
    if (bestScore < score) {
      bestScore = score;
    }
    if (bestStreak < streak) {
      bestStreak = streak;
    }

    score = 0;
    streak = 0;
    level = 0;

    _score.innerHTML = "Score : " + score;
    _bestScore.innerHTML = "Best Score : " + bestScore;
    _streak.innerHTML = "Streak : " + streak;
    _bestStreak.innerHTML = "Best Streak : " + bestStreak;
    _level.innerHTML = "Level : " + level;
  }
}

function Difficulty() {
  difficulty = 3;
  switch (difficulty) {
    case 1:
      _difficulty.innerHTML = "Basic";
      difficultyMultiplicator = 1;
      /*
      Addition or substraction of 2 numbers
      3 digit numbers max
      No multiplication
      Always a positive result
      */
      break;
    case 2:
      _difficulty.innerHTML = "Easy";
      difficultyMultiplicator = 3;
      /*
      Addition or substraction of 2 or 3 numbers
      3 digit numbers max
      No multiplication
      Result can be positive or negative
      */
      break;
    case 3:
      _difficulty.innerHTML = "Normal";
      difficultyMultiplicator = 5;
      /*
      Addition or substraction of 2 or 3 numbers
      3 digit numbers max
      Multiplication of 2 digit numbers max
      Multiplication of 2 numbers
      Multiplication and addition or substraction not allowed
      Result can be positive or negative
      */
      break;
    case 4:
      _difficulty.innerHTML = "Hard";
      difficultyMultiplicator = 8;
      /*
      Addition or substraction of 3 numbers
      4 digit numbers max
      Multiplication only 2 digit numbers
      Multiplication of 2 numbers
      Multiplication and addition or substraction allowed
      Result can be positive or negative
      */
      break;
    case 5:
      _difficulty.innerHTML = "Engineer";
      difficultyMultiplicator = 10;
      /*
      Addition or substraction 3 numbers
      Addition and substraction with 2, 3 or 4 digit numbers only
      Multiplication with 2 or 3 digit numbers
      Multiplication and addition or substraction allowed
      Result can be positive or negative
      */
      break;
  }
}

function Init() {
  score = 0;
  bestScore = 0;
  streak = 0;
  bestStreak = 0;
  level = 0;

  number1 = 0;
  number2 = 0;
  number3 = 0;
  isnumber3 = 0;
  sign1 = 0;
  sign2 = 0;

  answer = 0;
  playerAnswer = null;

  difficulty = 0;

  result = 0;
  healthMultiplicator = 1;
  difficultyMultiplicator = 0;

  _score.innerHTML = "Score : " + score;
  _bestScore.innerHTML = "Best Score : " + bestScore;
  _streak.innerHTML = "Streak : " + streak;
  _bestStreak.innerHTML = "Best Streak : " + bestStreak;
  _level.innerHTML = "Level : " + level;
}

Init();
Difficulty();
Calculs();

// Execute function when player give answer
_playerAnswer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    CheckAnswer();
    Scoring();
    Calculs();
    _playerAnswer.value = null;
  }
});
