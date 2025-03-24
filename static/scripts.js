// Переключение темы
const themeToggle = document.getElementById("theme-toggle");

// Обработчик переключателя темы
themeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
});

// Начальная установка темы в зависимости от предпочтений пользователя
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeToggle.checked = true;
} else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    themeToggle.checked = false;
}

// Сохранение предпочтений темы в localStorage
themeToggle.addEventListener("change", function () {
    if (this.checked) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Открытие и закрытие бокового меню
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("close-menu");

// Открыть меню
menuToggle.addEventListener("click", function () {
    sidebar.classList.add("active");
});

// Закрыть меню
closeMenu.addEventListener("click", function () {
    sidebar.classList.remove("active");
});

// Закрытие меню при клике вне меню
document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});
