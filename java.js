let isRed = true;

function cambiarColorFondo() {
    const redOverlay = document.querySelector('.red-overlay');
    const blueOverlay = document.querySelector('.blue-overlay');

    if (isRed) {
        redOverlay.style.opacity = 1; // Muestra el filtro rojo
        blueOverlay.style.opacity = 0; // Oculta el filtro azul
    } else {
        redOverlay.style.opacity = 0; // Oculta el filtro rojo
        blueOverlay.style.opacity = 1; // Muestra el filtro azul
    }

    isRed = !isRed; // Cambia el estado
}

// Cambia el color cada 5000 ms (5 segundos)
setInterval(cambiarColorFondo, 5000);

// Función para mostrar la descripción
function mostrarDescripcion() {
    const descripcion = document.querySelector('.description');
    descripcion.classList.add('show'); // Agrega la clase para hacer visible la descripción
}

// Función para mostrar el título
function mostrarTitulo() {
    const titulo = document.querySelector('.title');
    titulo.style.opacity = 1; // Hace visible el título
}

// Muestra la descripción después de 1 segundo (1000 ms)
setTimeout(mostrarDescripcion, 1000);

// Muestra el título después de 1 segundo (1000 ms)
setTimeout(mostrarTitulo, 1000);

// Función para mostrar el contenedor de la foto y la descripción
function mostrarFotoContainer() {
    const photoContainer = document.querySelector('.photo-container');
    photoContainer.classList.add('show-container'); // Agrega la clase para hacer visible el contenedor
}

// Muestra el contenedor de la foto y la descripción después de 1 segundo (1000 ms)
setTimeout(mostrarFotoContainer, 1000);