// import Drum from './drum.js';
// import DrumKey from './drum_key.js';
import Note from './note.js';

document.addEventListener('DOMContentLoaded', () => {
  const moonlight = document.querySelector('.moonlight');
  const bumblebee = document.querySelector('.bumblebee');
  const don = document.querySelector(`.don`);
  const don2 = document.querySelector(`.don2`);
  const kat = document.querySelector(`.kat`);
  const canvas = document.getElementById('game-canvas');
  const stage = canvas.getContext('2d');

  // const drum = new Drum(stage);
  // drum.render();
  // const keyA = new DrumKey(drum, 'a');
  // const keyS = new DrumKey(drum, 's');
  // const keyK = new DrumKey(drum, 'k');
  // const keyL = new DrumKey(drum, 'l');
  // keyA.register(kat);
  // keyS.register(don);
  // keyK.register(don2);
  // keyL.register(kat);

  // let notes = [];
  // for (let i = 0; i < 20; i++) {
  //   let note = new Note(3);
  //   notes.push(note);
  // }

  let frames = 0;
  let notes = [];
  let gameOn = false;
  let music = bumblebee;
  let musicOn = false;

  function togglePlay() {
    if (musicOn) {
      music.pause();
      musicOn = false;
    } else {
      music.play();
      musicOn = true;
    }
    gameOn = gameOn ? false : true;
    update();
  }

  document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      togglePlay();
    }
  });
  document.addEventListener('click', e => togglePlay());

  function update() {
    if (!gameOn) {
      return;
    }

    stage.clearRect(0, 0, 800, 500);
    frames ++;
    let delay = 5 + Math.floor(Math.random() * 20);

    if (frames % delay === 0) {
      if (notes.length < 5) {
        let note = new Note(4);
        notes.push(note);
        frames = 0;
      }
    }

    let tempNotes = Object.assign([], notes);
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      stage.drawImage(note.image, note.x, note.y);
      note.move();

      if (note.x < 100) {
        tempNotes.shift();
      }
    }
    notes = tempNotes;

    requestAnimationFrame(update);
  }
});
