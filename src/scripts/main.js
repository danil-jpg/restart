import slider from "./slider.js";
import showVid from "./etc.js";
import popUp from "./popUp.js";

showVid();

if (document.querySelector(".foreground")) {
  slider(".foreground", " .sliderToggler", ".sliderToggler__button");
}

popUp();
