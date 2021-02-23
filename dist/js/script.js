const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  overlay = document.querySelector(".menu__overlay"),
  links = document.querySelectorAll(".menu__link a");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

links.forEach((i) => {
  i.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

const percent = document.querySelectorAll('.skills__percents-percent'),
  lines = document.querySelectorAll('.skills__percents-line span');

percent.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

const arrow = document.querySelector('.arrow_up');

arrow.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function () {
  arrow.hidden = (pageYOffset < document.documentElement.clientHeight);
});
