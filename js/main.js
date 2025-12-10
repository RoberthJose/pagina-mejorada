// JavaScript para cambiar de sección
const botones = document.querySelectorAll('.tab-btn');
const secciones = document.querySelectorAll('.seccion');

botones.forEach(btn => {
  btn.addEventListener('click', () => {
    secciones.forEach(sec => sec.classList.remove('seccion-activa'));
    document.getElementById(btn.dataset.target).classList.add('seccion-activa');
  });
