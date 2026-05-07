// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  let voices = [];

  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const exploreImg = document.querySelector("#explore img");
  const pressButton = document.querySelector("button");

  function loadVoices() {
    voiceSelect.innerHTML =
      '<option value="select" disabled selected>Select Voice:</option>';
    voices = window.speechSynthesis.getVoices();
    for (const voice of voices) {
      let option = document.createElement("option");
      option.text = voice.name;
      voiceSelect.appendChild(option);
    }
  }

  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;

  pressButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = textToSpeak.value;
    utterance.voice = voices[voiceSelect.selectedIndex - 1];
    window.speechSynthesis.speak(utterance);

    utterance.onstart = () => {
      exploreImg.src = "assets/images/smiling-open.png";
    };

    utterance.onend = () => {
      exploreImg.src = "assets/images/smiling.png";
    };
  });
}
