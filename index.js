const elements = document.querySelectorAll('.section, .card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

function verPromos() {
    alert("¡Promociones disponibles próximamente!");
}
