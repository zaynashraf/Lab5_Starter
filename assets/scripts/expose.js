// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const audio = document.querySelector("audio");

  // Set initial volume based on slider (starts at 50 so 0.5)
  audio.volume = volumeSlider.value / 100;


  // Change image and audio sources after selecting respective option
  hornSelect.addEventListener("change", function() {
    const selectedHorn = hornSelect.value;

    if (selectedHorn === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } 
    else if (selectedHorn === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } 
    else if (selectedHorn === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });



  // Change audio icon and volume depending on slider
  volumeSlider.addEventListener("input", function() {
    const volume = volumeSlider.value;

    // Update volume 
    audio.volume = volume / 100;

    // Update icon
    if (volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } 
    else if (volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } 
    else if (volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } 
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });


  // Initialize confetti
  const jsConfetti = new JSConfetti();

  // Play audio
  playButton.addEventListener("click", function() {
    audio.play();

    // Play confetti if on party horn
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}