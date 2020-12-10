const blockDonate = document.querySelector(".donate");
const lifes = blockDonate.querySelector(".lifes");
const coins = blockDonate.querySelector(".coins");
const score = blockDonate.querySelector(".scoreNumbers");
const character = blockDonate.querySelector(".character");
const up = blockDonate.querySelector(".up");
const down = blockDonate.querySelector(".down");
const left = blockDonate.querySelector(".left");
const right = blockDonate.querySelector(".right");

const won = blockDonate.querySelector(".won");
const lose = blockDonate.querySelector(".lose");

const xl = 1366;
const lg = 992;
const pixelFL = 30;
const pixelXL = 24;
let countlifes = 5;
let scoreNumber = 0;
let characterPositionX = 3;
let characterPositionY = 15;

let maze = [];

function newGame() {
  setToStart();
  newSkin();
  refreshCoins();
  refreshLifes();
  refreshScore();
}

function dead() {
  setToStart();
  newSkin();
  countlifes--;
  lifes.querySelector(".life").remove();
  if (countlifes <= 0) {
    newGame();

    lose.classList.add("show");
    setTimeout(function () {
      lose.classList.remove("show");
    }, 3000);
  }
}

function newSkin() {
  let randomMonster = Math.floor(Math.random() * Math.floor(5)) + 1;
  character.style.backgroundImage = `url('images/monster_lab${randomMonster}.svg')`;
}

function refreshMaze() {
  maze[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  maze[1] = [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 25, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 26, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1];
  maze[2] = [1, 21, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 27, 1];
  maze[3] = [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 28, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1];
  maze[4] = [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 29, 1, 0, 0, 0, 0, 0, 1];
  maze[5] = [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1];
  maze[6] = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1];
  maze[7] = [1, 0, 1, 0, 22, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 1, 1, 1, 210, 1, 0, 1];
  maze[8] = [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 23, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1];
  maze[9] = [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1];
  maze[10] = [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 211, 0, 1, 0, 1, 1, 1];
  maze[11] = [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 212, 1];
  maze[12] = [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1];
  maze[13] = [1, 0, 1, 0, 1, 0, 0, 24, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1];
  maze[14] = [1, 215, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 214, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 213, 1, 0, 0, 0, 0, 1, 0, 1];
  maze[15] = [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}

function refreshCoins() {
  refreshMaze();
  coins.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    coins.insertAdjacentHTML('beforeend', `<span class="coin coin${i + 1}"></span>`);
  }
}

function refreshLifes() {
  countlifes = 3;
  lifes.innerHTML = "";
  for (let i = 0; i < countlifes; i++) {
    lifes.insertAdjacentHTML('beforeend', '<span class="life"></span>');
  }
}

function refreshScore() {
  scoreNumber = 0;
  score.innerHTML = "0000";
}

function setToStart() {
  characterPositionY = 15;
  characterPositionX = 3;

  if (document.documentElement.clientWidth >= xl) {
    character.style.top = characterPositionY * pixelFL + 4 + "px";
    character.style.left = characterPositionX * pixelFL + 4 + "px";
  } else if (document.documentElement.clientWidth >= lg) {
    character.style.top = characterPositionY * pixelXL + 4 + "px";
    character.style.left = characterPositionX * pixelXL + 4 + "px";
  }
}

function isThisEndOfMap() {
  if ((characterPositionY < 0) || (characterPositionX < 0) ||
    (characterPositionY > maze.length - 1) ||
    (characterPositionX > maze[0].length - 1)) {
    dead();

    return true;
  }

  return false;
}

function isThisWall() {
  if (maze[characterPositionY][characterPositionX] === 1) {
    dead();

    return true;
  }

  return false;
}

function isThisWin() {
  if (maze[characterPositionY][characterPositionX] === 2) {
    newGame();
    won.classList.add("show");
    setTimeout(function () {
      won.classList.remove("show");
    }, 5000);

    return true;
  }

  return false;
}

function isThisCoin() {
  if (maze[characterPositionY][characterPositionX] > 20) {
    let coin = maze[characterPositionY][characterPositionX].toString().substring(1);
    coins.querySelector(`.coin${coin}`).remove();
    maze[characterPositionY][characterPositionX] = 0;
    scoreNumber += 100;
    if (scoreNumber < 1000) {
      score.innerHTML = `0${scoreNumber}`;
    } else {
      score.innerHTML = `${scoreNumber}`;
    }

    return true;
  }

  return false;
}

function gameCycle() {
  isThisCoin();
  isThisWin();
}

function isThisNormalSquere() {
  if (isThisEndOfMap() || isThisWall()) {
    return false;
  }

  return true;
}

function moveUp() {
  if (document.documentElement.clientWidth >= lg) {
    characterPositionY--;
    if (isThisNormalSquere()) {
      let topPX = window.getComputedStyle(character, null).getPropertyValue("top");
      let top = 0;

      if (document.documentElement.clientWidth >= xl) {
        top = +topPX.substring(0, topPX.length - 2) - pixelFL;
      } else {
        top = +topPX.substring(0, topPX.length - 2) - pixelXL;
      }

      character.style.top = top + "px";
    }
  }
}

function moveDown() {
  if (document.documentElement.clientWidth >= lg) {
    characterPositionY++;
    if (isThisNormalSquere()) {
      let topPX = window.getComputedStyle(character, null).getPropertyValue("top");
      let top = 0;

      if (document.documentElement.clientWidth >= xl) {
        top = +topPX.substring(0, topPX.length - 2) + pixelFL;
      } else {
        top = +topPX.substring(0, topPX.length - 2) + pixelXL;
      }

      character.style.top = top + "px";
    }
  }
}

function moveLeft() {
  if (document.documentElement.clientWidth >= lg) {
    characterPositionX--;
    if (isThisNormalSquere()) {
      let leftPX = window.getComputedStyle(character, null).getPropertyValue("left");
      let left = 0;

      if (document.documentElement.clientWidth >= xl) {
        left = +leftPX.substring(0, leftPX.length - 2) - pixelFL;
      } else {
        left = +leftPX.substring(0, leftPX.length - 2) - pixelXL;
      }

      character.style.left = left + "px";
    }
  }
}

function moveRight() {
  if (document.documentElement.clientWidth >= lg) {
    characterPositionX++;
    if (isThisNormalSquere()) {
      let leftPX = window.getComputedStyle(character, null).getPropertyValue("left");
      let left = 0;

      if (document.documentElement.clientWidth >= xl) {
        left = +leftPX.substring(0, leftPX.length - 2) + pixelFL;
      } else {
        left = +leftPX.substring(0, leftPX.length - 2) + pixelXL;
      }

      character.style.left = left + "px";
    }
  }
}

function moveUpHandler() {
  moveUp();
  gameCycle();
}
function moveDownHandler() {
  moveDown();
  gameCycle();
}
function moveLeftHandler() {
  moveLeft();
  gameCycle();
}
function moveRightHandler() {
  moveRight();
  gameCycle();
}

up.addEventListener("click", moveUpHandler);
down.addEventListener("click", moveDownHandler);
left.addEventListener("click", moveLeftHandler);
right.addEventListener("click", moveRightHandler);

document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyW') {
    moveUpHandler();
  } else if (event.code == 'KeyS') {
    moveDownHandler();
  } else if (event.code == 'KeyA') {
    moveLeftHandler();
  } else if (event.code == 'KeyD') {
    moveRightHandler();
  }
});

newGame();
