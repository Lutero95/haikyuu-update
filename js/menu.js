document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const menuLinks = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
}); 