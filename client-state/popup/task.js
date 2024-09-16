const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = subscribeModal.querySelector('.modal__close');

subscribeModal.addEventListener('click', handler);

function handler() {
  subscribeModal.classList.remove('modal_active');
  document.cookie = "modalActive=close; max-age=2629743";
}

let results = document.cookie;
if (results !== 'modalActive=close') {
  subscribeModal.classList.add('modal_active');
}