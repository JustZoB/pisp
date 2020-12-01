const blockAbout = document.querySelector(".about .section__image");
const wowButton = blockAbout.querySelector(".wow");
const arcMonsters = blockAbout.querySelectorAll(".arc");
const gamepad = blockAbout.querySelector(".gamepad");
const lamp = blockAbout.querySelector(".lamp");
const cube = blockAbout.querySelector(".cube");

let blockAboutState = 1;
let oddEvenCoin = true;

wowButton.addEventListener("click", () => {
  arcMonsters.forEach(monster => {
    monster.classList.remove("dead");
    monster.classList.remove("finallyDead");
  });
  blockAbout.classList.remove("state" + blockAboutState);
  blockAboutState++;
  if (blockAboutState === 6) {
    blockAboutState = 1;
  }
  blockAbout.classList.add("state" + blockAboutState);
});

gamepad.addEventListener("click", () => {
  blockAbout.insertAdjacentHTML('beforeend', '<span class="toasty"></span>');
  gamepad.style.pointerEvents = "none";
  setTimeout(function () {
    blockAbout.querySelector(".toasty").remove();
    gamepad.style.pointerEvents = "unset";
  }, 1500);
});

lamp.addEventListener("click", () => {
  lamp.classList.toggle("active");
});

cube.addEventListener("click", () => {
  oddEvenCoin = !oddEvenCoin;
  if (oddEvenCoin) {
    blockAbout.insertAdjacentHTML('beforeend', '<span class="newCoin1"></span>');
    setTimeout(function () { blockAbout.querySelector(".newCoin1").remove() }, 1500);
  } else {
    blockAbout.insertAdjacentHTML('beforeend', '<span class="newCoin2"></span>');
    setTimeout(function () { blockAbout.querySelector(".newCoin2").remove() }, 1500);
  }
});

arcMonsters.forEach(monster => {
  monster.addEventListener("click", () => {
    monster.classList.add("dead");
    setTimeout(function () { monster.classList.add("finallyDead") }, 500);

  });
});
