// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImg = document.querySelector('img');

  let voices = [];

  // Load voices into dropdown
  function populateVoices() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = '<option disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  speechSynthesis.addEventListener('voiceschanged', populateVoices);

  // Button click event
  button.addEventListener('click', function() {
    const text = textArea.value;

    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedIndex = voiceSelect.value;
    utterance.voice = voices[selectedIndex];

    // Change face when speaking starts
    utterance.addEventListener('start', function() {
      faceImg.src = "assets/images/smiling-open.png";
    });

    // Change back when speaking ends
    utterance.addEventListener('end', function() {
      faceImg.src = "assets/images/smiling.png";
    });

    synth.speak(utterance);
  });
}