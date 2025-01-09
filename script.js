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
    // Verificamos que la clase `pagina-especial` está en el body
    if (document.body.classList.contains('pagina-especial')) {
        window.addEventListener('scroll', function () {
            const menu = document.querySelector('.menu2');
            const tituloPrincipal = document.querySelector('.titulo-principalqs');
            const tituloSecundario = document.querySelector('.titulo-secundarioqs');
            const seccion1 = document.querySelector('.imagen-fondoqs'); // Primera sección

            if (!seccion1) {
                console.error("No se encontró la sección con clase 'imagen-fondoqs'.");
                return;
            }

            // Obtener el punto de activación: un quinto antes del final de la sección 1
            const seccion1TriggerPoint = seccion1.offsetTop + seccion1.offsetHeight * 0.8;

            // Cambia el fondo del menú y oculta los títulos cuando no estás en la sección 1
            if (window.scrollY >= seccion1TriggerPoint) {
                menu.classList.add('scrolled'); // Fondo verde para el menú

                // Ocultar los títulos
                if (tituloPrincipal) tituloPrincipal.classList.add('hide-titles');
                if (tituloSecundario) tituloSecundario.classList.add('hide-titles');
            } else {
                menu.classList.remove('scrolled'); // Fondo transparente para el menú

                // Mostrar los títulos
                if (tituloPrincipal) tituloPrincipal.classList.remove('hide-titles');
                if (tituloSecundario) tituloSecundario.classList.remove('hide-titles');
            }
        });
    }
}
