const main = document.querySelector("#main");
const whatsButton = document.querySelector(".whatsapp-button");
const show = "show";

function animeScroll() {
  const windowTop = window.scrollY;
  const targetMainTop = main.offsetTop;

  if (windowTop > targetMainTop) {
    whatsButton.classList.add(show);
  }
  if (windowTop < targetMainTop) {
    whatsButton.classList.remove(show);
  }
}

window.addEventListener("scroll", function () {
  animeScroll();
});
