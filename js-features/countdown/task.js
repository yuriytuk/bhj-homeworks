const timer1 = document.getElementById("timer");
const click_file = document.getElementById("click_file");
let timer; 
let x = 59;

function timer_alert() {
    let a = new Date();
    let minutes = a.getMinutes();
    let hours = a.getHours();
    timer1.textContent = hours + ":" + minutes + ":" + x;
    x--;
    if (x < 0){
        clearTimeout(timer);
        alert('Вы победили в конкурсе!');
        timer1.textContent = hours + ":" + (minutes - 1) + ":00";
        //Location.assign("https://owen.ru/uploads/121/owenionet.zip");
        click_file.click();
    }
    else {
        timer = setTimeout(timer_alert, 20);
        if (x < 10) {
            timer1.textContent = hours + ":" + minutes + ":0" + x;
        }
    }
}
timer_alert();