// Función para inicializar las secciones (oculta todas menos la inicial)
function inicializarSecciones() {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // Muestra la sección inicial ("quienes-somos")
    document.getElementById('quienes-somos').style.display = 'block';
}

// Función para mostrar una sección específica
function mostrarSecciones(seccionID) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none'); // Oculta todas las secciones

    const seccionActiva = document.getElementById(seccionID);
    if (seccionActiva) {
        seccionActiva.style.display = 'block'; // Muestra la sección seleccionada
    }
}

// Función para mostrar/ocultar el menú desplegable
document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('menu-flotante');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Inicializar la página al cargar
document.addEventListener('DOMContentLoaded', () => {
    inicializarSecciones();
});


