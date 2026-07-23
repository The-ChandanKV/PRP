// JavaScript file for handling landing page features

// Function to handle intersection observer for scroll animations
function initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Add event to initialize animations when the document is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);