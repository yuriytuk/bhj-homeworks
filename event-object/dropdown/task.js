let element = document.getElementsByClassName('dropdown__value');

element[0].addEventListener("click", handler1);
function handler1() {
    let elem = document.getElementsByClassName('dropdown__list');
    elem[0].classList.add('dropdown__list_active');
}