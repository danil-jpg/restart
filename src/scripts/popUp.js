function pop_up() {
  if (document.querySelectorAll(".form__button")) {
    let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
    let popup = document.querySelector(".popup"); // Само окно
    let openPopupButtons = document.querySelectorAll(".form__button"); // Кнопки для показа окна
    let closePopupButton = document.querySelector(".pop-up__close"); // Кнопка для скрытия окна

    openPopupButtons.forEach((button) => {
      // Перебираем все кнопки
      button.addEventListener("click", (e) => {
        // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add("active"); // Добавляем класс 'active' для фона
        popup.classList.add("active"); // И для самого окна
      });
    });

    closePopupButton.addEventListener("click", () => {
      // Вешаем обработчик на крестик
      popupBg.classList.remove("active"); // Убираем активный класс с фона
      popup.classList.remove("active"); // И с окна
    });

    document.addEventListener("click", (e) => {
      // Вешаем обработчик на весь документ
      if (e.target === popupBg) {
        // Если цель клика - фот, то:
        popupBg.classList.remove("active"); // Убираем активный класс с фона
        popup.classList.remove("active"); // И с окна
      }
    });
  }
}

export default pop_up;

// З.ы взял отсюда,эта реализация будет получше моей,так-что пока она эталонная --  https://webdevtips.pro/js/pure-js-popup/
