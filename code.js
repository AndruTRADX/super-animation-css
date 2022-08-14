// selección de objetos del DOM
const modal = document.querySelector('.modal')
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const closeBtn = document.querySelector('.modal-content__close');

// Funciones flecha
const addModal = ()=> {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
}

// Escucha de eventos
button1.addEventListener('click', addModal)
button2.addEventListener('click', addModal)
button3.addEventListener('click', addModal)

closeBtn.addEventListener('click',()=>{
  modal.classList.add('hidden');
  modal.classList.remove('visible');
})