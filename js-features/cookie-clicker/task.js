//alert('Привет');
const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerCounterDate = document.getElementById("clicker__counter_date");
let a = 0;
let b;
let c = 0;
let seconds = 0;

function changeSizes() {
    a +=1;
    if (a % 2 == 0) {
        image.width = 250;
        image.height = 250;
     } else {
        image.width = 200;
        image.height = 200;
     }
     clickerCounter.textContent = a;
     b = new Date();
     seconds += b.getSeconds();
     c = Number((a / b.getSeconds()).toFixed(2));
     clickerCounterDate.textContent = c;
};

image.onclick = changeSizes;