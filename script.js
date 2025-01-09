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
            const contenidoqs = document.querySelector('.contenidoqs');
            
            // Selecciona la segunda sección (ajusta el selector si es necesario)
            const section2 = document.querySelector('.seccion2');
            
            // Verifica si la página ha desplazado más allá de la segunda sección
            if (window.scrollY > section2.offsetTop) {
                // Cambia el fondo del menú a verde
                menu.classList.add('scrolled');
                
                // Oculta los títulos dentro de contenidoqs
                contenidoqs.classList.add('hide-titles');
            } else {
                // Restaura el fondo del menú a transparente
                menu.classList.remove('scrolled');
                
                // Muestra nuevamente los títulos dentro de contenidoqs
                contenidoqs.classList.remove('hide-titles');
            }
        });
    }
}



