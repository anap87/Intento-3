function mostrarSecciones(seccionID) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');
    document.getElementById(seccionID).style.display = 'block';
}

document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-flotante');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

