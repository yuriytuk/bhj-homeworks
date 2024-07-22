const element = document.getElementsByClassName('dropdown__link');
const valueDropdown = document.getElementsByClassName('dropdown__value')[0];
const spisok = document.getElementsByClassName('dropdown__list')[0];

valueDropdown.addEventListener("click", handler);

function handler() {
    // Открытие списка
    spisok.classList.toggle('dropdown__list_active');
    for (i = 0; i < element.length; i++) {
        element[i].onclick = function(event) {
            valueDropdown.textContent = this.textContent;
            event.preventDefault();
            // Закрытие списка
            spisok.classList.remove('dropdown__list_active');
        }
    }
}
