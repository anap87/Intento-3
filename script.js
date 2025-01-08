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

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu2"); // Aquí seleccionamos el menú con la clase menu2
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { // Cambia 100 según el punto de scroll donde desees el cambio
            menu.classList.add("menu-scroll");
        } else {
            menu.classList.remove("menu-scroll");
        }
    });
});
