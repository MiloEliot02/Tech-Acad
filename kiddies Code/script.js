document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.split-screen');
    let startX = 0;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX;

        if (deltaX > 50) {
            // Swipe right
            container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        } else if (deltaX < -50) {
            // Swipe left
            container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    });
});