const body = document.querySelector("body");
const menu = document.querySelector(".header .wrap");
const links = document.querySelectorAll(".smooth-scroll");
const burgerButton = menu.querySelector(".burger-button_box");

burgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("disableScroll");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    const scrollTo = document.querySelector(link.getAttribute('data-href'));

    if (document.documentElement.clientWidth >= 992) {
      scroll({
        top: scrollTo.offsetTop,
        behavior: 'smooth',
      });
    }

    if (document.documentElement.clientWidth < 992) {
      menu.classList.toggle("active");
      body.classList.toggle("disableScroll");
      setTimeout(function () {
        scroll({
          top: scrollTo.offsetTop,
          behavior: 'smooth',
        });
      }, 100);
    }
  });
});
