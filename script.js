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
            const tituloPrincipal = document.querySelector('.titulo-principalqs');
            const tituloSecundario = document.querySelector('.titulo-secundarioqs');

            // Selecciona la primera sección
            const section1 = document.querySelector('.imagen-fondoqs');

            if (section1) {
                // Calcula el final de la primera sección
                const section1Bottom = section1.offsetTop + section1.offsetHeight;

                // Verifica si el scroll está más allá del final de la primera sección
                if (window.scrollY >= section1Bottom) {
                    // Cambia el fondo del menú a verde
                    menu.classList.add('scrolled');
                    
                    // Oculta los títulos
                    tituloPrincipal.classList.add('hide-titles');
                    tituloSecundario.classList.add('hide-titles');
                } else {
                    // Restaura el fondo del menú a transparente
                    menu.classList.remove('scrolled');
                    
                    // Muestra nuevamente los títulos
                    tituloPrincipal.classList.remove('hide-titles');
                    tituloSecundario.classList.remove('hide-titles');
                }
            }
        });
    }
}
