// Initialize AOS Library
AOS.init({
    duration: 1000,
    once: true,
});

// Loader Animation
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const dots = document.querySelector('.dots');

    // Simulate loading process
    setTimeout(() => {
        loader.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }, 4000);

    // Dots animation
    let dotCount = 0;
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dots.textContent = '.'.repeat(dotCount);
    }, 500);
});
