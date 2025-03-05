// JavaScript for active navigation links
const navLinks = document.querySelectorAll('.topnav a');

// Add active class to clicked link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active'); 
    });
});

const sections = document.querySelectorAll('section');
const nav = document.querySelector('.topnav');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
