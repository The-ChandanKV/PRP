// JavaScript for landing page functionality

// Implementing IntersectionObserver for scroll animations

const featureCards = document.querySelectorAll('.feature-card');

const options = {
    root: null,
    threshold: 0.1
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class when the element is in view
            entry.target.classList.add('animate-in');
        } else {
            // Optional: Remove the animation class when the element is out of view
            entry.target.classList.remove('animate-in');
        }
    });
};

const observer = new IntersectionObserver(callback, options);
featureCards.forEach(card => {
    observer.observe(card);
});