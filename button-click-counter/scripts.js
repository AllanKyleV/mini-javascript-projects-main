// select Objects
const span = document.querySelector('#span');
const addBtn = document.querySelector('#add');
const subractBtn = document.querySelector('#subtract');
const resetBtn = document.querySelector('#reset');

// Raw function
let count = 0;

addBtn.addEventListener('click', () => {
    count++;
    span.textContent = count;
        if (count < 0) {
    span.style.color = 'red';
    } else if (count > 0) {
        span.style.color = 'green';
    } else {
        span.style.color = 'black';
    }
});

subractBtn.addEventListener('click', () => {
    count--;
    span.textContent = count;
        if (count < 0) {
    span.style.color = 'red';
    } else if (count > 0) {
        span.style.color = 'green';
    } else {
        span.style.color = 'black';
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    span.textContent = count;
    if (count < 0) {
    span.style.color = 'red';
    } else if (count > 0) {
        span.style.color = 'green';
    } else {
        span.style.color = 'black';
    }
});


// Bonus challenges (once you finish the basic one):
// Add a reset button to set the counter back to 0.
// Add a decrease button to subtract from the counter.
// Make the number change color when it’s positive, negative, or zero.
// Save the counter in localStorage, so the number stays even if you refresh the page.
 