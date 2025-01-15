const testimonials = [
    `"This is an amazing product! Highly recommend it to everyone."`,
    `"Great performance and design. Worth every penny!"`,
    `"Perfect for gaming enthusiasts. A must-have accessory."`
];

let currentIndex = 0;

const testimonialText = document.querySelector('.testimonial-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Проверяем текущий URL
    const isLightTheme = window.location.href.includes('wireframe-light.html');

    // Устанавливаем текст кнопки в зависимости от темы
    themeToggle.textContent = isLightTheme ? 'Switch Theme' : 'Switch Theme';

    // Обработчик клика для переключения тем
    themeToggle.addEventListener('click', () => {
        if (isLightTheme) {
            // Переход на тёмную тему
            window.location.href = 'wireframe.html';
        } else {
            // Переход на светлую тему
            window.location.href = 'wireframe-light.html';
        }
    });
});






// Получаем элементы по их ID
const openPopupBtn = document.getElementById('open-popup'); // Кнопка Submit из секции signup
const popup = document.getElementById('popup');             // Само модальное окно
const closePopup = document.getElementById('close-popup');  // Крестик (span)
const popupForm = document.getElementById('popup-form');    // Форма внутри попапа

// 1. При клике на кнопку "Submit" (в основной форме) – показываем попап
openPopupBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Отменяем отправку формы, чтобы не перезагружать страницу
  popup.style.display = 'block'; // Показываем модальное окно
});

// 2. При клике на крестик (close) – закрываем попап
closePopup.addEventListener('click', function () {
  popup.style.display = 'none'; 
});

// 3. Если кликнуть вне окна – тоже закрываем
window.addEventListener('click', function (event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// 4. Обработка формы внутри попапа
popupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Получаем значения полей
  const nameValue = document.getElementById('name').value;
  const telValue = document.getElementById('tel').value;

  // Для примера: выводим в консоль, или отправляем AJAX-запрос
  console.log('Name:', nameValue);
  console.log('Tel:', telValue);

  // После отправки/проверок можно скрыть попап
  popup.style.display = 'none';

  // Очистить поля, если нужно
  popupForm.reset();
});




