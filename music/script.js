const audio = document.querySelector("audio");
const playlist = document.querySelectorAll(".playlist li a");
const playBtn = document.querySelector(".play-btn");
const stopBtn = document.querySelector(".stop-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");


let currentTrack = 0;
audio.src = playlist[currentTrack].getAttribute("data-src");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
  } else {
    audio.pause();
    playBtn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-play"></i>`
  }
});




nextBtn.addEventListener("click", () => {
  currentTrack++;
  if (currentTrack >= playlist.length) {
    currentTrack = 0;
  }
  audio.src = playlist[currentTrack].getAttribute("data-src");
  audio.play();
  
  playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
});

prevBtn.addEventListener("click", () => {
  currentTrack--;
  if (currentTrack < 0) {
    currentTrack = playlist.length - 1;
  }
  audio.src = playlist[currentTrack].getAttribute("data-src");
  audio.play();
  
  playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
});

for (let i = 0; i < playlist.length; i++) {
  playlist[i].addEventListener("click", (event) => {
    event.preventDefault();
    audio.pause();
    currentTrack = i;
    audio.src = playlist[currentTrack].getAttribute("data-src");
    audio.play();
    
    playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
  });
}
function nextTrack() {
  currentTrack++;
  if (currentTrack >= playlist.length) {
    currentTrack = 0;
  }
  audio.src = playlist[currentTrack].getAttribute("data-src");
  audio.play();
  
  playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
}

audio.addEventListener("ended", () => {
  nextTrack();
});

nextBtn.addEventListener("click", () => {
  nextTrack();
});

prevBtn.addEventListener("click", () => {
  currentTrack--;
  if (currentTrack < 0) {
    currentTrack = playlist.length - 1;
  }
  audio.src = playlist[currentTrack].getAttribute("data-src");
  audio.play();
  
  playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
});

for (let i = 0; i < playlist.length; i++) {
  playlist[i].addEventListener("click", (event) => {
    event.preventDefault();
    audio.pause();
    currentTrack = i;
    audio.src = playlist[currentTrack].getAttribute("data-src");
    audio.play();
    
    playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`
  });
}

window.onload = function () {
  setTimeout(function () {
    playBtn.click();
  }, 7000);
};