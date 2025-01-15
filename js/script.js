// Отзывы
const testimonials = [
    `"This is an amazing product! Highly recommend it to everyone."`,
    `"Great performance and design. Worth every penny!"`,
    `"Perfect for gaming enthusiasts. A must-have accessory."`,
    `"Exceptional customer service and quality."`,
    `"Highly functional and beautifully designed."`
];

let currentIndex = 0;

const testimonialText = document.querySelector('.testimonial-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Функция обновления текста отзыва
function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index];
}

// Переключение на предыдущий отзыв
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
});

// Переключение на следующий отзыв
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
});

// Инициализация первого отзыва
document.addEventListener('DOMContentLoaded', () => {
    updateTestimonial(currentIndex);
});

// Переключатель темы
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

// Проверка и обработка формы email
document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.querySelector('input[name="email"]');
    const errorMessage = document.getElementById('error-message');
    const popup = document.getElementById('popup'); // Модальное окно
    const closePopup = document.getElementById('close-popup'); // Кнопка закрытия модального окна

    // Проверяем, что все элементы существуют
    if (!emailForm || !emailInput || !errorMessage || !popup) {
        console.error("Не удалось найти элементы формы или модального окна.");
        return;
    }

    // Обработка отправки формы
    emailForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Отключаем стандартное поведение формы

        const emailValue = emailInput.value.trim();

        // Если поле пустое
        if (!emailValue) {
            errorMessage.textContent = "Пожалуйста, введите адрес электронной почты!";
            emailInput.classList.add("input-error");
            return;
        }

        // Проверка формата email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            errorMessage.textContent = "Пожалуйста, введите корректный адрес электронной почты!";
            emailInput.classList.add("input-error");
            return;
        }

        // Если все проверки пройдены
        errorMessage.textContent = ""; // Убираем сообщение об ошибке
        emailInput.classList.remove("input-error");

        // Показываем модальное окно
        popup.style.display = 'block';
    });

    // Закрытие модального окна
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    // Закрытие модального окна при клике вне области
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

