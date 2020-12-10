const blockAdvantage = document.querySelector(".advantage .blocks");
const priceBlock = blockAdvantage.querySelector(".price_block");
const cube = blockAdvantage.querySelector(".cube");

let oddCoin = true;

cube.addEventListener("click", () => {
  oddCoin = !oddCoin;
  if (oddCoin) {
    priceBlock.insertAdjacentHTML('beforeend', '<span class="newCoin1"></span>');
    setTimeout(function () { priceBlock.querySelector(".newCoin1").remove() }, 1500);
  } else {
    priceBlock.insertAdjacentHTML('beforeend', '<span class="newCoin2"></span>');
    setTimeout(function () { priceBlock.querySelector(".newCoin2").remove() }, 1500);
  }
});
