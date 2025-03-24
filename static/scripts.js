// Открытие бокового меню
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
});

// Закрытие бокового меню
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});

// Дополнительно добавим обработку закрытия меню при клике вне меню
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});
