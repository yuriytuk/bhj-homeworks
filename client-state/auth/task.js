const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signoutBtn = document.getElementById('signout__btn');

form.addEventListener('submit', e => {
    e.preventDefault();
    let formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/auth');

    xhr.addEventListener('load', function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 201 || xhr.status == 200) {
            const answer = JSON.parse(this.responseText);
            if (answer.success !== false) {
              localStorage.userId = answer.user_id;
              localStorage.userId = answer.user_id;
              userId.innerText = localStorage.userId;
              signin.classList.remove('signin_active');
              welcome.classList.add('welcome_active');
            } else {
              alert("Неправильный ввод логина или пароля.");
            }
          }
        }
    });
    xhr.send(formData);
});

signoutBtn.addEventListener('click', () => {
  delete localStorage.userId;
  welcome.classList.remove('welcome_active'); 
  signin.classList.add('signin_active');  
});

if (localStorage.userId !== undefined) {
  userId.innerText = localStorage.userId;
  welcome.classList.add('welcome_active');  
  } else {
  signin.classList.add('signin_active');
}
