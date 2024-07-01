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

const _clock = document.getElementById("clock");
const _clockBtn = document.getElementById("clock_btn");
const _needle = document.getElementById("needle");

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
let baseHealth = null;
let health = null;
let bonusHealth = null;

let clock = null;
let clockMultiplicator = null;

let result = null;
let healthMultiplicator = null;

//#endregion

//#region Maths

function Calculs() {
  // Set number in a random number between 0 and 100
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  number3 = Math.floor(Math.random() * 100);

  // Set randomly the signs
  sign1 = Math.floor(Math.random() * 2);
  sign2 = Math.floor(Math.random() * 2);

  // Make action depending of the difficulty
  switch (difficulty) {
    // Basic
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

    // Easy
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

    // Medium
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

    // Hard
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

    // Engineer
    case 5:
      sign1 = Math.floor(Math.random() * 3);
      sign2 = Math.floor(Math.random() * 3);
      isnumber3 = 1;
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

  // Display information
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

  // Log all answers (will be change when finished)
  console.log("answer for calcul n°" + level + " = " + answer);
}

//#endregion

//#region Checking answer

function CheckAnswer() {
  playerAnswer = _playerAnswer.value;
  if (answer == playerAnswer) {
    result = true;
  }
  if (answer != playerAnswer) {
    result = false;
  }
}

//#endregion

//#region Scoring

function Scoring() {
  // If correct result, the score increase
  if (result == true) {
    score = score + 1 * healthMultiplicator * difficulty * clockMultiplicator;

    streak++;
    level++;

    _score.innerHTML = "Score : " + score;
    _streak.innerHTML = "Streak : " + streak;
    _level.innerHTML = "Level : " + level;
  }

  // If wrong result, check the HP
  if (result == false) {
    // If no more HP, set the best score and reset all other stats
    if (health == 0) {
      if (bestScore < score) {
        bestScore = score;
      }

      score = 0;
      level = 0;

      _score.innerHTML = "Score : " + score;
      _bestScore.innerHTML = "Best Score : " + bestScore;
      _level.innerHTML = "Level : " + level;
    }

    // Reset the streak
    if (bestStreak < streak) {
      bestStreak = streak;
    }

    streak = 0;

    _streak.innerHTML = "Streak : " + streak;
    _bestStreak.innerHTML = "Best Streak : " + bestStreak;
  }
}

//#endregion

//#region Health

function Health() {
  // If the result is wrong, loose a hp
  if (result == false) {
    // If no bonus hp, loose a hp
    if (bonusHealth == 0) {
      health--;
    }
    // If bonus hp, loose one
    if (bonusHealth > 0) {
      bonusHealth--;
    }
  }
  // Every 10 correct result in a row, gain a bonus hp
  if ((streak + 1) % 10 == 0) {
    bonusHealth++;
  }
  // Can't exceed max hp
  if (health + bonusHealth > baseHealth) {
    bonusHealth--;
  }

  healthMultiplicator = 6 - baseHealth;
}

// Display the hearts
function DisplayHearts() {
  for (let i = 5; i > health; i--) {
    _health.children[i - 1].classList.remove("redHeart");
    _health.children[i - 1].classList.remove("blueHeart");
    _health.children[i - 1].classList.add("whiteHeart");
  }
  for (let i = 0; i < health + bonusHealth; i++) {
    _health.children[i].classList.add("blueHeart");
  }
  for (let i = 0; i < health; i++) {
    _health.children[i].classList.add("redHeart");
  }
  for (let i = 5; i > baseHealth; i--) {
    _health.children[i - 1].classList.remove("whiteHeart");
    _health.children[i - 1].classList.remove("redHeart");
    _health.children[i - 1].classList.add("darkHeart");
  }
}

//#endregion

//#region Clock

function InitClock() {
  if (clock == true) {
    StartClock();
    clockMultiplicator = 2;
  }
  if (clock == false) {
    EndClock();
    clockMultiplicator = 1;
  }
}

function DamageClock() {
  // If no bonus hp, loose a hp
  if (bonusHealth == 0) {
    health--;
  }
  // If bonus hp, loose one
  if (bonusHealth > 0) {
    bonusHealth--;
  }

  DisplayHearts();
}

function StartClock() {
  _needle.classList.add("rotate");
  _clockBtn.innerHTML = "Clock on";
  clock = true;
}

function EndClock() {
  _needle.classList.remove("rotate");
  _clockBtn.innerHTML = "Clock off";
  clock = false;
}

function ResetClock() {
  _needle.style.animation = "none";
  _needle.offsetHeight;
  _needle.style.animation = null;
}

//#endregion

//#region Difficulty

function Difficulty() {
  switch (difficulty) {
    case 1:
      _difficulty.innerHTML = "Basic";
      /*
      Addition or substraction of 2 numbers
      3 digit numbers max
      No multiplication
      Always a positive result
      */
      break;

    case 2:
      _difficulty.innerHTML = "Easy";
      /*
      Addition or substraction of 2 or 3 numbers
      3 digit numbers max
      No multiplication
      Result can be positive or negative
      */
      break;

    case 3:
      _difficulty.innerHTML = "Normal";
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

//#endregion

//#region Init

function Init() {
  score = 0;
  bestScore = 0;
  streak = 0;
  bestStreak = 0;
  level = 1;

  number1 = 0;
  number2 = 0;
  number3 = 0;
  isnumber3 = 0;
  sign1 = 0;
  sign2 = 0;

  answer = 0;
  playerAnswer = null;

  difficulty = 2;
  baseHealth = 3;
  health = baseHealth;
  bonusHealth = 0;

  clock = false;
  clockMultiplicator = 1;

  result = null;
  healthMultiplicator = 1;

  _score.innerHTML = "Score : " + score;
  _bestScore.innerHTML = "Best Score : " + bestScore;
  _streak.innerHTML = "Streak : " + streak;
  _bestStreak.innerHTML = "Best Streak : " + bestStreak;
  _level.innerHTML = "Level : " + level;
}

Init();
InitClock();
Health();
DisplayHearts();
Difficulty();
Calculs();

//#endregion

//#region Inputs

// Execute function when player give answer
_playerAnswer.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    CheckAnswer();
    ResetClock();
    Health();
    DisplayHearts();
    Scoring();
    Calculs();

    result = null;
    _playerAnswer.value = null;
  }
});

// Execute function when player hit the clock button
_clockBtn.addEventListener("click", (e) => {
  if (clock == true) {
    EndClock();
    _clockBtn.innerHTML = "Paused";
  } else {
    StartClock();
  }
});

_needle.addEventListener("animationiteration", (e) => {
  DamageClock();
});

//#endregion
