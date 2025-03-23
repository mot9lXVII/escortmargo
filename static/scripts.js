// Получаем элементы
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// Открываем меню
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Закрываем меню
closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Закрываем меню при клике вне его
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});
