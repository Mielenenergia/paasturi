
let timer;
let startTime;

function startTimer() {
    if (!startTime) {
        startTime = Date.now();
        localStorage.setItem("startTime", startTime);
    }
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
    localStorage.removeItem("startTime");
    startTime = null;
}

function resetTimer() {
    clearInterval(timer);
    startTime = null;
    localStorage.removeItem("startTime");
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
}

function updateTimer() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;

    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    let days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

window.onload = function() {
    startTime = localStorage.getItem("startTime");
    if (startTime) {
        startTime = parseInt(startTime);
        startTimer();
    }
};
