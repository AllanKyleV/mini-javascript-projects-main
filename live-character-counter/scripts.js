// Select objects
const count = document.querySelector('#count');
const maxCount = document.querySelector('#max-count');
const textArea = document.querySelector('#message');
const maxInput = document.querySelector('#input-max')
const updateBtn = document.querySelector('#update-btn');

function incrementCount(text) {
    return text.length;
}

function decrementCount(max, text) {
    return max - text.length;
}

function maxLimit() {
    const val = Number(maxInput.value);
    return maxInput.value === '' || isNaN(val) ? 150 : val;
}

// Default limit
let limit = maxLimit();
count.textContent = incrementCount(textArea.value);  
maxCount.textContent = decrementCount(limit, textArea.value);

// Update limit when button clicked
updateBtn.addEventListener('click', () => {
    limit = maxLimit();
    maxCount.textContent = decrementCount(limit, textArea.value);
});

// Text area input
textArea.addEventListener('input', () => {

    if (textArea.value.length > limit) {
        textArea.value = textArea.value.slice(0, limit);
    }

    count.textContent = incrementCount(textArea.value);
    maxCount.textContent = decrementCount(limit, textArea.value);

    if (decrementCount(limit, textArea.value) <= limit * 0.20) {
        maxCount.style.color = 'red';
    } else {
        maxCount.style.color = 'black';
    }

    if (decrementCount(limit, textArea.value) === 0) {
        maxCount.textContent = "Limit reached!";
    }
});