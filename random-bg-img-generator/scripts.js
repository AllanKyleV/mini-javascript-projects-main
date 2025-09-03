// Select Objects
const changeBtn = document.querySelector('#change-bg');
const background = document.querySelector('body');

let images = [
    'url(images/bg1.jpg)',
    'url(images/bg2.jpg)',
    'url(images/bg3.jpg)',
    'url(images/bg4.jpg)',
    'url(images/bg5.jpg)'
];

// Function
function getRandomImages(arr) {
    let num = Math.floor(Math.random() * arr.length);
    return images[num];
}

changeBtn.addEventListener('click', () => {
    background.style.backgroundImage = getRandomImages(images);
});