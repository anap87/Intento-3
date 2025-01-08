function mostrarSecciones(seccionID) {
    const secciones = document.querySelectorAll('.seccion');
    // Primero ocultamos todas las secciones
    secciones.forEach(seccion => seccion.classList.remove('activa'));

    // Buscamos la sección que se debe mostrar
    const seccionSeleccionada = document.getElementById(seccionID);
    if (seccionSeleccionada) {
        // Agregamos la clase activa para mostrarla
        seccionSeleccionada.classList.add('activa');
    } else {
        console.log("Sección no encontrada: " + seccionID); // Verifica si la sección no existe
    }
}

// Evento del menú
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-flotante');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Menu pagina interna quienes somos

// Solo aplica el cambio de fondo si body tiene la clase pagina-especial
if (window.location.pathname === '/quienes-somos.html') {
    // Solo ejecutamos el código si estamos en la página "quienes-somos.html"
    if (document.body.classList.contains('pagina-especial')) {
        window.addEventListener('scroll', function () {
            const menu = document.querySelector('.menu2');
            if (window.scrollY > 50) {
                menu.classList.add('scrolled');
            } else {
                menu.classList.remove('scrolled');
            }
        });
    }
}

