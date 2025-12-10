// ======== MENÚ HAMBURGUESA ========

// Seleccionamos los elementos del DOM
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Función para abrir/cerrar el menú
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');  // Muestra u oculta el menú
  hamburger.classList.toggle('open');  // Animación del icono
});
