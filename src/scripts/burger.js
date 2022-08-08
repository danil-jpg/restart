function burger_file(trigger, oneForm) {
  console.log(document.querySelector(oneForm));
  document.querySelectorAll(trigger).forEach((item) => {
    item.addEventListener("click", (e) => {
      item.classList.toggle("header__top_mobile-list_close");
      document.querySelector(oneForm).classList.toggle("active");
    });
  });
}

export default burger_file;
