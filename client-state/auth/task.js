const form = document.getElementById('signin__form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/auth');

    xhr.addEventListener('readystatechange', function() {
      alert(this.status);
    });
    xhr.send(formData);
});