// select Objects
const countNum = document.querySelector('#count');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const resetBtn = document.querySelector('#reset');

function updateCount(count) {
    
    countNum.textContent = count;
    if (count < 0) {
        countNum.style.color = 'red';
    } else if (count > 0) {
        countNum.style.color = 'green';
    } else {
        countNum.style.color = 'black';
    }
};

let count = 0;

addBtn.addEventListener('click', () => {
    count++;
    updateCount(count);
});

subtractBtn.addEventListener('click', () => {
    count--;
    updateCount(count);
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount(count);
});