const radioPlayer = document.getElementById("radio-player");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const radioContainer = document.getElementById("radio");
const playIcon = document.querySelector(".radio-play__icon");
const pauseIcon = document.querySelector(".radio-pause__icon");

radioContainer.addEventListener("click", () => {
  if (radioPlayer.paused) {
    radioPlayer.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    console.log("play")
  } else {
    radioPlayer.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});

