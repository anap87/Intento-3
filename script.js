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
if (window.location.pathname.includes('quienes-somos.html')) {
    console.log("Script cargado en la página: quienes-somos.html");

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
            // Revisar si el scroll está en la sección 1
            if (window.scrollY < seccion1.offsetHeight) {
                menu.classList.add('menu-transparente'); // Fondo transparente en la sección 1
                tituloPrincipal.classList.remove('hide-titles'); // Mostrar títulos
                tituloSecundario.classList.remove('hide-titles');
            } else {
                menu.classList.remove('menu-transparente'); // Fondo normal cuando se sale de la sección 1
                tituloPrincipal.classList.add('hide-titles'); // Ocultar títulos
                tituloSecundario.classList.add('hide-titles');
            }
        });
    });
} else {
    console.log("Este script no se ejecuta en esta página.");
}
