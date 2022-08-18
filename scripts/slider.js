function slider(
  foreGroundClass = ".foreground",
  sliderClass = " .sliderToggler",
  sliderButtonClass = ".sliderToggler__button"
) {
  document.querySelector(sliderClass).addEventListener("input", (e) => {
    const sliderPos = e.target.value;

    document.querySelector(foreGroundClass).style.width = sliderPos + "%";

    let x = (document.querySelector(sliderButtonClass).style.left = `calc(${
      +sliderPos + 1.9
    }% - 67px)`);
  });
}

export default slider;
