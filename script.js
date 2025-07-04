//audio player with play/pause, progress bar, and skip buttons
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const progreso = document.getElementById('progreso');
const barra = document.getElementById('barra');
const avanzar = document.getElementById('avanzar');
const retroceder = document.getElementById('retroceder');

// Cambia icono al reproducir/pausar
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Actualiza barra de progreso
audio.addEventListener('timeupdate', () => {
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    progreso.style.width = `${porcentaje}%`;
});

// Permite hacer clic en la barra para cambiar el tiempo
barra.addEventListener('click', (e) => {
    const rect = barra.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const porcentaje = offsetX / barra.offsetWidth;
    audio.currentTime = porcentaje * audio.duration;
});

// Retroceder 10s
retroceder.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

// Avanzar 10s
avanzar.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

let ver = document.getElementsByClassName('btn_video');
let leer = document.getElementsByClassName('btn_lectura');
let escuchar = document.getElementsByClassName('btn_audio');

ver.addEventListener('click', () => {
    
});