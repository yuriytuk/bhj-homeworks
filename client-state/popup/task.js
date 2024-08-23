const modalWindow = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
  modalWindow.classList.remove('modal_active');
  localStorage.setItem('modalClose', 'close');
});

if (localStorage.getItem('modalClose') !== 'close') {
    modalWindow.classList.add('modal_active');
}