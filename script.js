// Simple animation for header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.transition = "0.5s";
    } else {
        header.style.background = "#111";
    }
});
