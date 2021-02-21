const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  overlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

const percent = document.querySelectorAll('.skills__percents-percent'),
  lines = document.querySelectorAll('.skills__percents-line span');

percent.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});