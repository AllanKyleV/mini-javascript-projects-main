// Select Objects
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock(); // run immediately once so it doesn't wait 1 sec