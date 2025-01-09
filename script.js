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
if (window.location.pathname.endsWith('quienes-somos.html')) {
    // Ejecutar solo si estamos en la página "quienes-somos.html"
    document.addEventListener('DOMContentLoaded', function () {
        const menu = document.querySelector('.menu2');
        const tituloPrincipal = document.querySelector('.titulo-principalqs');
        const tituloSecundario = document.querySelector('.titulo-secundarioqs');
        const seccion1 = document.querySelector('.imagen-fondoqs');

        if (!menu || !tituloPrincipal || !tituloSecundario || !seccion1) {
            console.error("No se encontró uno o más elementos necesarios en el DOM.");
            return;
        }

        // Escucha el evento de scroll
        window.addEventListener('scroll', function () {
            const seccion1TriggerPoint = seccion1.offsetTop + seccion1.offsetHeight * 0.8;

            if (window.scrollY >= seccion1TriggerPoint) {
                menu.classList.add('scrolled'); // Cambia el fondo del menú
                tituloPrincipal.classList.add('hide-titles'); // Oculta título principal
                tituloSecundario.classList.add('hide-titles'); // Oculta título secundario
            } else {
                menu.classList.remove('scrolled'); // Restaura el fondo del menú
                tituloPrincipal.classList.remove('hide-titles'); // Muestra título principal
                tituloSecundario.classList.remove('hide-titles'); // Muestra título secundario
            }
        });
    });
}

