console.log("Welcome to JP Conan's Portfolio.");

document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect logging or Easter eggs if needed
    const buttons = document.querySelectorAll('.pill-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            // subtle scale effect handled in CSS
        });
    });
});
