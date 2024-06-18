const holeGame = document.getElementsByClassName("hole");
const gameDead = document.getElementById('dead');
const gameLost = document.getElementById('lost');
let elem;
let victory = 0;
let exit = 0;

function time1() {
    for (i=0; i<holeGame.length; i++) {
        holeGame[i].addEventListener('click', handler);
    }
}

function handler() {
    document.title = this.classList.contains('hole_has-mole');
    elem = this.classList.contains('hole_has-mole');
    if (elem) {
        victory = victory + 1;
        gameDead.textContent = victory;
        if (victory == 10) {
            alert('Вы победили!');
            victory = 0;
            exit = 0;
            gameDead.textContent = 0;
            gameLost.textContent = 0;
        }
    } else {
        exit = exit + 1;
        gameLost.textContent = exit;
        if (exit == 5) {
            alert('Вы проиграли!');
            victory = 0;
            exit = 0;
            gameDead.textContent = 0;
            gameLost.textContent = 0;
        }
    }   
}

setTimeout(time1, 100);