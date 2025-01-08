const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Функция для обновления видимого блока
function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.toggle('active', index === currentIndex);
    });
}

// Кнопка "Previous"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    updateTestimonials();
});

// Кнопка "Next"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    updateTestimonials();
});

// Инициализация: отображаем первый блок
updateTestimonials();
