const navLinks = document.querySelectorAll('.topnav a');

function highlightNav() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
            
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', highlightNav);

highlightNav();
