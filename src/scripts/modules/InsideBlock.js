const insideBlock = document.querySelector(".inside .section__content");
const specifications = insideBlock.querySelectorAll(".specification");
const menuLinks = document.querySelectorAll(".header__nav ul a");

const inside = () => {
  specifications.forEach(block => {
    const blockPosition = block.getBoundingClientRect().y;
    const documentPosition = document.documentElement.clientHeight - 100;
    if (blockPosition < documentPosition) {
      block.classList.add("active");
      if (document.documentElement.clientWidth >= 768) {
        setTimeout(function () { block.classList.add("lineActive"); }, 1000);
        setTimeout(function () { block.classList.add("before"); }, 1300);
        setTimeout(function () { block.classList.add("after"); }, 1600);
      } else {
        setTimeout(function () {
          block.classList.add("lineActive");
          block.classList.add("before");
          block.classList.add("after");
        }, 300);
      }
    }
  });
}

window.addEventListener('scroll', inside);
