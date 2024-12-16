// Mostrar sección principal
function mostrarSecciones(seccionID) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        // Solo ocultar secciones visibles (no la sección de inicio)
        if (seccion.id !== 'inicio') {
            seccion.classList.remove('activa');
        }
    });

    // Buscar la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccionID);
    if (seccionSeleccionada) {
        // Mostrar solo la sección seleccionada
        seccionSeleccionada.classList.add('activa');
    }

    // Ocultar el menú flotante
    const menu = document.getElementById('menu-flotante');
    menu.style.display = 'none';
}

// Evento para mostrar/ocultar el menú flotante
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-flotante');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
