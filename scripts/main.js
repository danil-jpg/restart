import slider from "./slider.js";
import showVid from "./etc.js";
import pop_up from "./popUp.js";
import burger_file from "./burger.js";

window.addEventListener("load", () => {
  let popupBg = document.querySelector(".popup__bg"),
    burgerTrigger = document.querySelector(".header__top_mobile-list"),
    foreground = document.querySelector(".foreground");

  if (popupBg) {
    pop_up();
  }
  if (burgerTrigger) {
    burger_file(".header__top_mobile-list", ".burger");
  }
  if (foreground) {
    slider(".foreground", " .sliderToggler", ".sliderToggler__button");
  }

  showVid();
});
