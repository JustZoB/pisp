const menuLinks = document.querySelectorAll(".header__nav ul a");

const menu = () => {
  menuLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('data-href'));
    const sectionOffsetTop = section.offsetTop;
    const sectionOffsetBottom = section.offsetTop + section.clientHeight;
    const position = pageYOffset + document.documentElement.clientHeight - 300;

    if (position > sectionOffsetTop && position < sectionOffsetBottom) {
      link.classList.add("active-menu");
    } else {
      link.classList.remove("active-menu");
    }
  });
}

window.addEventListener('scroll', menu);
