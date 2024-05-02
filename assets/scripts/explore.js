// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Speech synthesis
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  let voices = [];
  //Face talking
  const img = document.querySelector('img');
  const text = document.getElementById('text-to-speak');
  const button = document.querySelector('button');

  //add voices to the drop down 
  function populateVoiceList() {

    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++){

      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  //add voices 
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  //change voice
  button.addEventListener('click', () => {
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const utterThis = new SpeechSynthesisUtterance(text.value);
    for (let i = 0; i < voices.length; i++){
      if (voices[i].name === selectedOption){
        utterThis.voice = voices[i];
      }
    }

    //open mouth 
    utterThis.onstart = () => {
      img.src = 'assets/images/smiling-open.png';
    };

    // close mouth again
    utterThis.onend = () => {
      img.src = 'assets/images/smiling.png'; 
    };

    synth.speak(utterThis);

  });

}