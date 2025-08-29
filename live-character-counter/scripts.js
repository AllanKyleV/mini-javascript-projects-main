// Select objects
const count = document.querySelector('#count');
const maxCount = document.querySelector('#max-count');
const textArea = document.querySelector('#message');

function incrementCount(text) {
    return text.length;
}

function decrementCount(max, text) {
    return max - text.length;
}

textArea.addEventListener('input', () => {
    let num = incrementCount(textArea.value);
    count.textContent = num;

    let maxNum = decrementCount(1500, textArea.value);
    maxCount.textContent = maxNum;
});