function mostrarSecciones(seccionID) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none'; // Ocultamos todas las secciones
    });
    
    const seccionSeleccionada = document.getElementById(seccionID);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block'; // Mostramos la sección seleccionada
    } else {
        console.log("Sección no encontrada: " + seccionID); // Para depurar si la ID no existe
    }
}

// Agregar el evento del menú
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-flotante');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});


