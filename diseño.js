const crazy = document.querySelector('.crazy');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.crazy span');

crazy.addEventListener('click', () =>{
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});