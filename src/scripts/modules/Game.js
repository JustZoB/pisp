const blockDonate = document.querySelector(".donate");
const lifes = blockDonate.querySelector(".lifes");
const coins = blockDonate.querySelector(".coins");
const score = blockDonate.querySelector(".scoreNumbers");
const character = blockDonate.querySelector(".character");
const up = blockDonate.querySelector(".up");
const down = blockDonate.querySelector(".down");
const left = blockDonate.querySelector(".left");
const right = blockDonate.querySelector(".right");

let countlifes = 5;
let scoreNumber = 0;
let characterPositionX = 3;
let characterPositionY = 15;

let maze = [];
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
  }
}

function newSkin() {
  let randomMonster = Math.floor(Math.random() * Math.floor(5)) + 1;
  character.style.backgroundImage = `url('images/monster_lab${randomMonster}.svg')`;
}

function refreshCoins() {
  coins.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    coins.insertAdjacentHTML('beforeend', `<span class="coin coin${i + 1}"></span>`);
  }
}

function refreshLifes() {
  countlifes = 5;
  lifes.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    lifes.insertAdjacentHTML('beforeend', '<span class="life"></span>');
  }
}

function refreshScore() {
  score.innerHTML = "0000";
}

function setToStart() {
  characterPositionX = 3;
  characterPositionY = 15;
  if (document.documentElement.clientWidth >= 1366) {
    character.style.top = "454px";
    character.style.left = "94px";
  } else {
    character.style.top = "364px";
    character.style.left = "76px";
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
    alert("YOU WON");

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

function isThisNormalSquere() {
  if (isThisEndOfMap() || isThisWall()) {
    return false;
  }

  return true;
}

function moveUp() {
  characterPositionY--;
  if (isThisNormalSquere()) {
    let topPX = window.getComputedStyle(character, null).getPropertyValue("top");
    let top = 0;

    if (document.documentElement.clientWidth >= 1366) {
      top = +topPX.substring(0, topPX.length - 2) - 30;
    } else {
      top = +topPX.substring(0, topPX.length - 2) - 24;
    }

    character.style.top = top + "px";
  }
}

function moveDown() {
  characterPositionY++;
  if (isThisNormalSquere()) {
    let topPX = window.getComputedStyle(character, null).getPropertyValue("top");
    let top = 0;

    if (document.documentElement.clientWidth >= 1366) {
      top = +topPX.substring(0, topPX.length - 2) + 30;
    } else {
      top = +topPX.substring(0, topPX.length - 2) + 24;
    }

    character.style.top = top + "px";
  }
}

function moveLeft() {
  characterPositionX--;
  if (isThisNormalSquere()) {
    let leftPX = window.getComputedStyle(character, null).getPropertyValue("left");
    let left = 0;

    if (document.documentElement.clientWidth >= 1366) {
      left = +leftPX.substring(0, leftPX.length - 2) - 30;
    } else {
      left = +leftPX.substring(0, leftPX.length - 2) - 24;
    }

    character.style.left = left + "px";
  }
}

function moveRight() {
  characterPositionX++;
  if (isThisNormalSquere()) {
    let leftPX = window.getComputedStyle(character, null).getPropertyValue("left");
    let left = 0;

    if (document.documentElement.clientWidth >= 1366) {
      left = +leftPX.substring(0, leftPX.length - 2) + 30;
    } else {
      left = +leftPX.substring(0, leftPX.length - 2) + 24;
    }

    character.style.left = left + "px";
  }
}

up.addEventListener("click", () => {
  moveUp();
  isThisCoin();
  isThisWin();
});
down.addEventListener("click", () => {
  moveDown();
  isThisCoin();
  isThisWin();
});
left.addEventListener("click", () => {
  moveLeft();
  isThisCoin();
  isThisWin();
});
right.addEventListener("click", () => {
  moveRight();
  isThisCoin();
  isThisWin();
});

document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyW') {
    moveUp();
    isThisCoin();
    isThisWin();
  } else if (event.code == 'KeyS') {
    moveDown();
    isThisCoin();
    isThisWin();
  } else if (event.code == 'KeyA') {
    moveLeft();
    isThisCoin();
    isThisWin();
  } else if (event.code == 'KeyD') {
    moveRight();
    isThisCoin();
    isThisWin();
  }
});

if (document.documentElement.clientWidth >= 992) {
  setToStart();
}
newSkin();
refreshCoins();
refreshLifes();
refreshScore();
