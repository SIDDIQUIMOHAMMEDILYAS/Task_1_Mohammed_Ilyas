// Select the button and the nav links list
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// 1. Toggle Menu when Hamburger button is clicked
mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Slide menu in/out
    mobileBtn.classList.toggle('active');  // Animate hamburger to X
});

// 2. Close Menu when a link is clicked (Improves UX)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileBtn.classList.remove('active');
        }
    });
});