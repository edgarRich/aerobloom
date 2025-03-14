document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a simple animation to the hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease-in-out';
        hero.style.opacity = 1;
    }, 500);
});
// Add more javascript functions as needed.