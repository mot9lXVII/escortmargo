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

// Проверяем сохраненную тему в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    document.getElementById('dark-theme').checked = true;
} else {
    body.classList.remove('dark-theme');
    document.getElementById('light-theme').checked = true;
}

// Обработка изменения темы
themeSwitcher.addEventListener('change', (event) => {
    if (event.target.value === 'dark') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Сохраняем тему в localStorage
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Сохраняем тему в localStorage
    }
});
