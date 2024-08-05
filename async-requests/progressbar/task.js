const progress = document.getElementById('progress');
const form = document.getElementById('form');
const input = form.querySelector('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload'); 
  xhr.upload.addEventListener('progress', function(e) {
    progress.value = (e.loaded / e.total).toFixed(1);
  });
  xhr.send(formData);
});

input.addEventListener('change', function() {
    progress.value = '0';
});