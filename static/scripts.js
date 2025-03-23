
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {

            e.preventDefault();

            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';


            setTimeout(() => {
                window.location.href = link.href;
            }, 300); 
        });
    });
});
