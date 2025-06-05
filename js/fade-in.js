const fadeElements = document.querySelectorAll('article');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    // observer.unobserve(entry.target); // можно отключить после первого появления
    } else {
    entry.target.classList.remove('visible');
    }
});
}, { threshold: 0.1 }); // Порог видимости 10%

fadeElements.forEach(element => {
observer.observe(element);
});