const navLinks = document.querySelectorAll('.topnav a');

function highlightNav() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        // Check if the section is in the middle of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
            
            // Add the 'visible' class to trigger the animation
            section.classList.add('visible');
        } else {
            // Remove the 'visible' class if the section is out of view
            section.classList.remove('visible');
        }
    });
}

// Smooth scrolling when clicking on navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Listen for scroll events to highlight navigation links
window.addEventListener('scroll', highlightNav);

// Initial check to highlight the section on page load
highlightNav();
