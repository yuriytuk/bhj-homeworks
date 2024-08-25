const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = subscribeModal.querySelector('.modal__close');

modalClose.addEventListener('click', handler);

function handler() {
  modalClose.classList.remove('modal_active');
  document.cookie = "modalActive=close; max-age=2629743"; //2629743
}

let results = document.cookie.match(/modalActive=(.+?)(;|$)/);
try {
  if (results[1] !== 'close') {
    subscribeModal.classList.add('modal_active');
  };
} catch (error) {
  
}