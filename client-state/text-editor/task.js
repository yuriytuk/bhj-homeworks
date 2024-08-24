const textWindow = document.getElementById('editor');
const deleteText = document.getElementById("clean");

if (localStorage.getItem('key')) {
    textWindow.value = localStorage.getItem('key');
}

deleteText.addEventListener('click', () => textWindow.value = '');
window.addEventListener('unload', () => localStorage.setItem('key', textWindow.value));