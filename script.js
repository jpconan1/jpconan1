console.log("Welcome to JP Conan's new site. Built with code, not builders.");

// Simple interaction to prove JS is working
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    
    // Simple fade in effect
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease-out';
        hero.style.opacity = 1;
    }, 100);
});
