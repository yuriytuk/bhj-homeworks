const textWindow = document.getElementById('editor');
const deleteText = document.getElementById("clean");

deleteText.addEventListener('click', () => textWindow.value = '');
window.addEventListener('unload', () => localStorage.setItem('key', textWindow.value));
textWindow.value = localStorage.getItem('key');
