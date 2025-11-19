document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger-menu');
    const mainMenu = document.querySelector('.main-menu');

    const toggleMenu = () => {
        mainMenu.classList.toggle('active');

        const icon = hamburger.querySelector('i');
        if (mainMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    };

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    const closeMenu = () => {
        if (mainMenu.classList.contains('active')) {
            toggleMenu();
        }
    }

    mainMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const stickyThreshold = 100;

    const handleScroll = () => {
        if (window.scrollY >= stickyThreshold) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

    if (navbar) {
        window.addEventListener('scroll', handleScroll);
    }
});