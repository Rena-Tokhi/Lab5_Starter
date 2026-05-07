// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const audio = document.querySelector("audio");
  const volume = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  hornSelect.addEventListener("change", () => {
    const value = hornSelect.value;

    hornImage.src = `assets/images/${value}.svg`;
    hornImage.alt = value;

    audio.src = `assets/audio/${value}.mp3`;

  });

  volume.addEventListener("input", () => {
    const value = parseInt(volume.value);

    if (value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

    audio.volume = value / 100;
  });

  playButton.addEventListener("click", () => {
    audio.play();

    if (hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
