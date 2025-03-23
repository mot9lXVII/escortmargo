// Плавный переход между страницами
document.addEventListener('DOMContentLoaded', function () {
    // Добавляем обработчик для всех ссылок
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            // Отменяем стандартное поведение ссылки
            e.preventDefault();

            // Плавное исчезновение страницы
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';

            // Переход на новую страницу после завершения анимации
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // 300ms — время анимации
        });
    });
});