// Función para mostrar las secciones al hacer clic en "Inicio"
function mostrarSecciones() {
    document.getElementById('inicio-seccion').style.display = 'none'; // Oculta la sección de inicio
    document.getElementById('quienes-somos').style.display = 'block'; // Muestra la sección "Quiénes somos"
    // Aquí puedes agregar más código para mostrar las demás secciones
}

// Función para ocultar todas las secciones excepto la de inicio al cargar la página
window.onload = function() {
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none'; // Oculta las secciones
    });
};
