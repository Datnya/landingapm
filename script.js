// Header scroll and Hero Parallax effect
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const header = document.getElementById('header');

    // Header effect
    if (scroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Hero Parallax
    const heroImg = document.querySelector('.hero-bg img');
    if (heroImg && scroll < window.innerHeight) {
        heroImg.style.transform = `translateY(${scroll * 0.3}px) scale(${1 + scroll * 0.0002})`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle (to be implemented if needed)
console.log('APM Group JS loaded');
