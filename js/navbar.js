document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.navbar__burger');
    const menu = document.querySelector('.navbar__list');

    if (burger && menu) {
        burger.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    const menuItems = document.querySelectorAll('.navbar__element a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            document.body.classList.remove('no-scroll');
            }
        });
    });
});