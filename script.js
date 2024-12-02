// Función para mostrar las secciones al hacer clic en los botones del menú
function mostrarSecciones(seccionID) {
    // Oculta todas las secciones
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Muestra la sección seleccionada
    document.getElementById(seccionID).style.display = 'block';
}

// Mostrar el menú al hacer clic en cualquier parte de la página
document.body.addEventListener('click', function() {
    let menuFlotante = document.getElementById('menu-flotante');
    // Alterna la visibilidad del menú (se muestra si está oculto y se oculta si está visible)
    menuFlotante.style.display = menuFlotante.style.display === 'block' ? 'none' : 'block';
});

// Evitar que el menú se cierre cuando se haga clic dentro del menú
document.getElementById('menu-flotante').addEventListener('click', function(event) {
    event.stopPropagation(); // Esto evita que el clic en el menú cierre el menú
});

// Función para ocultar todas las secciones excepto la de inicio al cargar la página
window.onload = function() {
    var secciones = document.querySelectorAll('.seccion');
    
    // Oculta todas las secciones inicialmente
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none'; 
    });

    // Muestra solo la sección de inicio al cargar
    document.getElementById('inicio-seccion').style.display = 'block'; 

    // Asignar eventos de clic a los botones del menú para mostrar las secciones
    document.getElementById('btn-inicio').addEventListener('click', function() {
        mostrarSecciones('inicio-seccion');
    });
    document.getElementById('btn-quienes-somos').addEventListener('click', function() {
        mostrarSecciones('quienes-somos');
    });
    document.getElementById('btn-nuestros-servicios').addEventListener('click', function() {
        mostrarSecciones('nuestros-servicios');
    });
};
