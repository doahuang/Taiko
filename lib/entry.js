import Drum from './drum.js';
import DrumKey from './drum_key.js';
import Note from './note.js';

document.addEventListener('DOMContentLoaded', () => {
  const bumblebee = document.querySelector('.bumblebee');
  const lacompanella = document.querySelector('.lacompanella');
  const overture = document.querySelector('.overture');
  const don = document.querySelector(`.don`);
  const kat = document.querySelector(`.kat`);
  const canvas = document.getElementById('game-canvas');
  const stage = canvas.getContext('2d');

  const drum = new Drum(stage);
  drum.render();
  const keyA = new DrumKey(drum, 'a');
  const keyS = new DrumKey(drum, 's');
  const keyK = new DrumKey(drum, 'k');
  const keyL = new DrumKey(drum, 'l');
  keyA.register(kat);
  keyS.register(don);
  keyK.register(don);
  keyL.register(kat);

  let frames = 0;
  let notes = [];
  let songLib = [bumblebee, lacompanella, overture];
  let songId = Math.floor(Math.random() * songLib.length);
  let music = songLib[songId];
  let musicOn = false;
  let gameOn = false;
  let gameEnded = false;

  music.onended = function() {
    gameEnded = true;
  }

  function togglePlay() {
    if (musicOn) {
      musicOn = false;
      music.pause();
    } else {
      musicOn = true;
      music.play();
    }
    gameOn = gameOn ? false : true;
    update();
  }

  document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      togglePlay();
    }
  });

  function update() {
    if (gameEnded || !gameOn) {
      return;
    }

    stage.clearRect(0, 0, 800, 500);
    frames ++;

    drum.render();

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
      if (note.x < 80) {
        tempNotes.shift();
      }
    }
    notes = tempNotes;

    requestAnimationFrame(update);
  }
});
