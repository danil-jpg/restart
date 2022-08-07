import slider from "./slider.js";
import showVid from "./etc.js";

showVid();

if (document.querySelector(".foreground")) {
  slider(".foreground", " .sliderToggler", ".sliderToggler__button");
}
