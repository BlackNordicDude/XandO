let cells = document.querySelectorAll('.main_board_cell');
let cancel_bth = document.querySelector('.main_cancel');
let restart_btn = document.querySelector('.main_restart');
let info = document.querySelector('.main_info');
let count = document.querySelector('.main_count');
let start = document.querySelector('.loadscreen_start_btn');
let loadscreen = document.querySelector('.loadscreen');
let loadscreen_logo = document.querySelector('.loadscreen_logo');
let board = document.querySelector('.main');

let countSteps = 1;
let winner = '';
let stepsArr = [];
let lastStep = [];

function checkWinner(cells) {
    if (cells[0].classList.contains('X') & cells[1].classList.contains('X') & cells[2].classList.contains('X')) {
        cells[0].classList.add('red'); cells[1].classList.add('red'); cells[2].classList.add('red');
        return winner = 'X'
    } else if 
        (cells[3].classList.contains('X') & cells[4].classList.contains('X') & cells[5].classList.contains('X')) {
        cells[3].classList.add('red'); cells[4].classList.add('red'); cells[5].classList.add('red');
        return winner = 'X'   
    } else if 
        (cells[6].classList.contains('X') & cells[7].classList.contains('X') & cells[8].classList.contains('X')) {
        cells[6].classList.add('red'); cells[7].classList.add('red'); cells[8].classList.add('red');
        return winner = 'X'   
    } else if 
        (cells[0].classList.contains('X') & cells[4].classList.contains('X') & cells[8].classList.contains('X')) {
        cells[0].classList.add('red'); cells[4].classList.add('red'); cells[8].classList.add('red');
        return winner = 'X'   
    } else if 
        (cells[2].classList.contains('X') & cells[4].classList.contains('X') & cells[6].classList.contains('X')) {
        cells[2].classList.add('red'); cells[4].classList.add('red'); cells[6].classList.add('red');
        return winner = 'X'   
    } else if 
        (cells[0].classList.contains('X') & cells[3].classList.contains('X') & cells[6].classList.contains('X')) {
        cells[0].classList.add('red'); cells[3].classList.add('red'); cells[6].classList.add('red');
        return winner = 'X'   
    } else if 
        (cells[1].classList.contains('X') & cells[4].classList.contains('X') & cells[7].classList.contains('X')) {
        cells[1].classList.add('red'); cells[4].classList.add('red'); cells[7].classList.add('red');
        return winner = 'X'   
    } else if 
        (cells[2].classList.contains('X') & cells[5].classList.contains('X') & cells[8].classList.contains('X')) {
        cells[2].classList.add('red'); cells[5].classList.add('red'); cells[8].classList.add('red');
        return winner = 'X'   
    }
    else if 
        (cells[0].classList.contains('O') & cells[1].classList.contains('O') & cells[2].classList.contains('O')) {
        cells[0].classList.add('red'); cells[1].classList.add('red'); cells[2].classList.add('red');
        return winner = 'O' 
    } else if 
        (cells[3].classList.contains('O') & cells[4].classList.contains('O') & cells[5].classList.contains('O')) {
        cells[3].classList.add('red'); cells[4].classList.add('red'); cells[5].classList.add('red');
        return winner = 'O' 
    } else if 
        (cells[6].classList.contains('O') & cells[7].classList.contains('O') & cells[8].classList.contains('O')) {
        cells[6].classList.add('red'); cells[7].classList.add('red'); cells[8].classList.add('red');
        return winner = 'O' 
    } else if 
        (cells[0].classList.contains('O') & cells[4].classList.contains('O') & cells[8].classList.contains('O')) {
        cells[0].classList.add('red'); cells[4].classList.add('red'); cells[8].classList.add('red');
        return winner = 'O' 
    } else if 
        (cells[2].classList.contains('O') & cells[4].classList.contains('O') & cells[6].classList.contains('O')) {
        cells[2].classList.add('red'); cells[4].classList.add('red'); cells[6].classList.add('red');
        return winner = 'O' 
    } else if 
        (cells[0].classList.contains('O') & cells[3].classList.contains('O') & cells[6].classList.contains('O')) {
        cells[0].classList.add('red'); cells[3].classList.add('red'); cells[6].classList.add('red');
        return winner = 'O' 
    } else if 
        (cells[1].classList.contains('O') & cells[4].classList.contains('O') & cells[7].classList.contains('O')) {
        cells[1].classList.add('red'); cells[4].classList.add('red'); cells[7].classList.add('red');
        return winner = 'O' 
    } else if 
        (cells[2].classList.contains('O') & cells[5].classList.contains('O') & cells[8].classList.contains('O')) {
        cells[2].classList.add('red'); cells[5].classList.add('red'); cells[8].classList.add('red');
        return winner = 'O' 
    }   else if (countSteps >= 9) {
        info.innerHTML = 'DRAW!';
        cells.forEach(el => el.removeEventListener('click', fillCell));
        return false
    } else return false
}
function fillCell() {
    if ((this.classList.length < 2)) {
        this.classList.add( countSteps % 2 != 0 ? 'X' : 'O');
        stepsArr.push(this)
        info.innerHTML = countSteps % 2 != 0 ? 'O turn' : 'X turn'; 
        if (!checkWinner(cells)) {
            count.innerHTML = countSteps;
            return countSteps++
        } else {
            info.innerHTML = winner + ' is WINNER!';
            cells.forEach(el => el.removeEventListener('click', fillCell));
        }
    } else {
        alert('Choose another cell!');
        this.removeEventListener('click', fillCell);
    }    
}
function clrCell(el) {
    if (el.classList.contains('X')) {
        el.classList.remove('X')
    } else if (el.classList.contains('O')) {
        el.classList.remove('O')
    }
}
function restart() {
    cells.forEach(clrCell);
    cells.forEach(el => el.classList.remove('red'));
    cells.forEach((el) => 
    el.addEventListener('click', fillCell));
    info.innerHTML = 'Lets start!';
    countSteps = 1;
    stepsArr = [];
    count.innerHTML = 0;
}
function cancel() {
    lastStep = stepsArr.pop();
    clrCell(document.getElementById(lastStep.id));
    countSteps--;
    count.innerHTML = countSteps - 1;
}
function startGame() {
    loadscreen.style.opacity = '0';
    loadscreen.style.zIndex = '5';
    board.style.opacity = '1';
    loadscreen_logo.style.transform = 'rotate(360deg)';
    cells.forEach((el) => 
    el.addEventListener('click', fillCell));
}

start.addEventListener('click', startGame);
restart_btn.addEventListener('click', restart);
cancel_bth.addEventListener('click', cancel);


