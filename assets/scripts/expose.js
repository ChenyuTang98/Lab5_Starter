// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornToSelect = document.getElementById("horn-select");
  const image = document.querySelector("img");
  const Audio = document.querySelector("audio");
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  const volumeSlider = document.getElementById("volume");
  const volumeControls = document.getElementById("volume-controls");
  const volumeIcon = volumeControls.querySelector("img");

  hornToSelect.addEventListener('change', (e)=>{
      // hornToSelect.src = 'assets/images/'+ e.target.value +'.svg';
      image.src = `assets/images/${e.target.value}.svg`;
      Audio.src = `assets/audio/${e.target.value}.mp3`;
  })
  playButton.addEventListener('click', ()=>{
    Audio.play();
    if (hornToSelect.value==="party-horn"){
      jsConfetti.addConfetti();
    }
  })

 volumeSlider.addEventListener('input', (e)=>{
      Audio.volume = e.target.value / 100;
        if(e.target.value == 0){
          volumeIcon.src = `assets/icons/volume-level-0.svg`
        }
        else if (e.target.value < 33){
          volumeIcon.src = `assets/icons/volume-level-1.svg`
        }
        else if (e.target.value <67){
          volumeIcon.src = `assets/icons/volume-level-2.svg`
        }else{
          volumeIcon.src = `assets/icons/volume-level-3.svg`
        }
       })

}