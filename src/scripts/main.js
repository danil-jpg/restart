import slider from "./slider.js";
import showVid from "./etc.js";
import popUp from "./popUp.js";
import burger from "./burger.js";

showVid();

if (document.querySelector(".foreground")) {
  slider(".foreground", " .sliderToggler", ".sliderToggler__button");
}

popUp();
// burger();
