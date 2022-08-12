function showVid(
  imgClass = ".video__background_img",
  imgParent = ".video__background"
) {
  let imgPack = document.querySelectorAll(imgClass),
    imgWrappers = document.querySelectorAll(imgParent);

  //   if (imgPack && imgWrappers) {
  imgWrappers.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("video__background_img")) {
        e.target.classList.toggle("visibility");
      } else if (e.target.hasAttribute("width")) {
        item.childNodes[0].classList.toggle("visibility");
      }
    });
  });
  //   }
}
export default showVid;
