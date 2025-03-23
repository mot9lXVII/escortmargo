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

// Обработка изменения темы
const themeSwitcher = document.querySelector('.theme-switch');
const body = document.body;

themeSwitcher.addEventListener('change', (event) => {
    if (event.target.value === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});
