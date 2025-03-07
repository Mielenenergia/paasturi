let fastingStartTime = localStorage.getItem("fastingStartTime");

function updateTimer() {
    if (fastingStartTime) {
        const now = new Date().getTime();
        const startTime = parseInt(fastingStartTime);
        const elapsedTime = now - startTime;

        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
        let days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }
}

function startFasting() {
    fastingStartTime = new Date().getTime();
    localStorage.setItem("fastingStartTime", fastingStartTime);
    updateTimer();
    setInterval(updateTimer, 1000);
}

function stopFasting() {
    localStorage.removeItem("fastingStartTime");
    fastingStartTime = null;
}

function resetFasting() {
    stopFasting();
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
}

// Keep updating the timer if fasting is already started
setInterval(updateTimer, 1000);
