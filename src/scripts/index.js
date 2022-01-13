import '../scss/style.scss';

import './modules/Menu.js';
import './modules/ActiveMenu.js';
import './modules/AboutBlock.js';
import './modules/InsideBlock.js';
import './modules/AdvantageBlock.js';
import './modules/Game.js';

const body = document.querySelector("body");
const is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (is_safari) {
  body.classList.add("safari");
}
