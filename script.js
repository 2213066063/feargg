let isRed = false;

/* ========================= OVERLAYS ========================= */
function cambiarColorFondo() {
    const redOverlay = document.querySelector('.red-overlay');
    const blueOverlay = document.querySelector('.blue-overlay');

    if (redOverlay && blueOverlay) {
        if (isRed) {
            redOverlay.classList.add('active');
            blueOverlay.classList.remove('active');
        } else {
            redOverlay.classList.remove('active');
            blueOverlay.classList.add('active');
        }
        isRed = !isRed;
    }
}

/* ========================= INIT ========================= */

document.addEventListener('DOMContentLoaded', function() {

    const title = document.querySelector('.title-container');
    const container = document.querySelector('.photo-container');

    // 1. Espera a que el título se vea bien
    setTimeout(() => {
        title.classList.add('fade-out');
    }, 2500);

    // 2. Empieza a aparecer el contenido mientras el título se va
    setTimeout(() => {
        container.classList.add('show-container');
    }, 3000);

    // 3. Animación de color después
    setTimeout(cambiarColorFondo, 3500);
    setInterval(cambiarColorFondo, 5000);
});