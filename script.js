function mostrarSecciones(seccionID) {
    const secciones = document.querySelectorAll('.seccion');
    // Primero ocultamos todas las secciones
    secciones.forEach(seccion => {
        seccion.classList.add('ocultar'); // Se añaden todas las secciones a la clase 'ocultar'
    });

    // Buscamos la sección que se debe mostrar
    const seccionSeleccionada = document.getElementById(seccionID);
    if (seccionSeleccionada) {
        // Eliminamos la clase 'ocultar' de la sección seleccionada
        seccionSeleccionada.classList.remove('ocultar');
    } else {
        console.log("Sección no encontrada: " + seccionID); // Verifica si la sección no existe
    }
}

// Evento del menú
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-flotante');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});


// Evento para mostrar/ocultar el menú flotante
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-flotante');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
