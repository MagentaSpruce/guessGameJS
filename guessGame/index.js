"use strict";

let secretNum = document.querySelector(".secretNumber");
const guess = document.querySelector(".userGuess");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
const body = document.querySelector("body");

const replayBtn = document.querySelector(".replay");
const guessBtn = document.querySelector(".guess");

let secretNumGen = Number(Math.trunc(Math.random() * 20) + 1);
let userScore = 20;
let userHighScore = 0;

secretNum.textContent = secretNumGen;

const displayMsg = function (messageOutput) {
  message.textContent = messageOutput;
};

const changeStyle = function (edit) {
  body.style.backgroundColor = edit;
};

const scoreKeep = function (scores) {
  score.textContent = scores;
};

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guess.value);

  if (!guess.value) {
    displayMsg("Pick a number first!");
  } else {
    if (userGuess === secretNumGen) {
      displayMsg("You win!");
      changeStyle("gold");
      secretNum.style.width = "25rem";
      if (userScore > userHighScore) {
        highScore.textContent = userScore;
      }
    } else if (userGuess !== secretNumGen) {
      if (userScore > 1) {
        message.textContent =
          guess.value > secretNumGen ? "Too high" : "Too low";
        userScore--;
        scoreKeep(userScore);
      } else {
        displayMsg("You lost the game!");
        scoreKeep(0);
      }
    }
  }
});

replayBtn.addEventListener("click", () => {
  secretNumGen = Number(Math.trunc(Math.random() * 20) + 1);
  secretNum.textContent = secretNumGen;
  guess.value = "";
  scoreKeep(20);
  userScore = 20;
  displayMsg("Start guessing...");
  changeStyle("rebeccapurple");
  secretNum.style.width = "10rem";
});

console.log(secretNumGen);
