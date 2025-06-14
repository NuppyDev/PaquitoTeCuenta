// Video player with play/pause, progress bar, and skip buttons
let video = document.getElementById('video');
let plays = document.getElementById('play');
const icon = document.getElementById('plays');
let retroc = document.getElementById('retroceder');
let avanz = document.getElementById('avanzar');
let fullscreen = document.getElementById('full');
let progress = document.getElementById('progreso');
let tiempoActual = document.getElementById('tiempoActual');
let duracionTotal = document.getElementById('duracionTotal');

plays.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        icon.src = "/src/img/Pause.svg";
        plays.removeAttribute("id");
    } else {
        video.pause();
        icon.src = "/src/img/Play.svg";
        plays.setAttribute("id", "play");
    }
});

retroc.addEventListener('click', () => {
    video.currentTime -= 10;
});

avanz.addEventListener('click', () => {
    video.currentTime += 10;
});

fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});

video.addEventListener('loadedmetadata', () => {
    progress.max = video.duration;
    duracionTotal.textContent = formatTime(video.duration);
});

video.addEventListener('timeupdate', () => {
    progress.value = video.currentTime;
    tiempoActual.textContent = formatTime(video.currentTime);
});

progress.addEventListener('input', () => {
    video.currentTime = progress.value;
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}