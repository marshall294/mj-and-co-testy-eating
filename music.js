// music.js
let bgMusic;

export function initBackgroundMusic(src = 'song.mp3') {
  bgMusic = new Audio(src);
  bgMusic.loop = true;
  bgMusic.volume = 0.3;
  bgMusic.play().catch(() => {
    console.log("Autoplay blocked. User interaction needed.");
  });

  // Stop music when leaving page
  window.addEventListener('beforeunload', () => {
    if(bgMusic) bgMusic.pause();
  });
}

export function stopMusic() {
  if(bgMusic) bgMusic.pause();
}
