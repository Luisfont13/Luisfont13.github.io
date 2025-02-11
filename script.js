document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada exitosamente');
});

function mostrarAlerta() {
    alert('Hola, ¡bienvenido a mi sitio web!');
}

function cambiarColor() {
    const colores = ['#FF6347', '#FFD700', '#ADFF2F', '#20B2AA', '#1E90FF'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

function toggleSubMenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
}
