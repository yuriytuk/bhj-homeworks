const textWindow = document.getElementById('editor');
const deleteText = document.getElementById('clean');
const key = 'text';

if (localStorage[key] === undefined) {
    textWindow.value = "";
    } else {
        textWindow.value = localStorage[key];
}
deleteText.addEventListener('click', () => textWindow.value = '');
window.addEventListener('unload', () => localStorage[key] = textWindow.value);