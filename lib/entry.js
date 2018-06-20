import Drum from './drum.js';
import DrumKey from './drum_key.js';
import Note from './note.js';
import Score from './score.js';
import SpiritGauge from './spirit_gauge.js';
import TogglePlay from './toggle_play.js';
import ToggleMusic from './toggle_music.js';

document.addEventListener('DOMContentLoaded', () => {
  let songLib = [];
  const bumblebee = document.querySelector('.bumblebee');
  const lacompanella = document.querySelector('.lacompanella');
  const overture = document.querySelector('.overture');
  songLib = songLib.concat(bumblebee, lacompanella, overture);
  let songId = Math.floor(Math.random() * songLib.length);
  let music = songLib[songId];
  const don = document.querySelector('.don');
  const kat = document.querySelector('.kat');
  const toggleMusic = new ToggleMusic(music);
  const togglePlay = new TogglePlay();

  const canvas = document.getElementById('canvas');
  const stage = canvas.getContext('2d');

  const score = new Score();
  const spiritGauge = new SpiritGauge(340, 67);
  spiritGauge.render();
  score.render();

  function NoteStreamArea() {
    stage.beginPath();
    stage.strokeStyle = 'black';
    stage.lineWidth = 5;
    stage.rect(0, 150, 800, 200);
    stage.stroke();
    stage.fillStyle = 'lightgrey';
    stage.fillRect(0, 150, 800, 200);
    stage.beginPath();
    stage.fillStyle = 'black';
    stage.fillRect(0, 310, 800, 40);
    stage.fill();
  }

  NoteStreamArea();

  const drum = new Drum(stage);
  drum.render();
  const keyA = new DrumKey(drum, 'd');
  const keyS = new DrumKey(drum, 'f');
  const keyK = new DrumKey(drum, 'j');
  const keyL = new DrumKey(drum, 'k');
  keyA.register(kat);
  keyS.register(don);
  keyK.register(don);
  keyL.register(kat);
  const keys = [keyA, keyS, keyK, keyL];

  let frames = 0;
  let notes = [];
  let musicOn, gameOn, gameEnded;
  let vel = 4;

  let playPause = document.querySelector('.play-pause');
  playPause.addEventListener('click', () => togglePause());
  document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      togglePause();
    }
  });

  function togglePause() {
    if (musicOn) {
      musicOn = false;
      music.pause();
    } else {
      musicOn = true;
      music.play();
    }
    togglePlay.render();
    gameOn = gameOn ? false : true;
    update();
  }

  music.onended = function() {
    gameEnded = true;
    gameOn = false;
  }

  function clearStage() {
    stage.clearRect(0, 0, 800, 500);
  }

  function update() {
    if (gameEnded || !gameOn) {
      return;
    }

    clearStage();
    frames ++;

    NoteStreamArea();
    drum.render();
    spiritGauge.render();
    score.render();

    let delay = 5 + Math.floor(Math.random() * 80 / vel);
    if (frames % delay === 0) {
      if (notes.length < vel + Math.random() * vel) {
        let note = new Note(vel, stage);
        notes.push(note);
        frames = 0;
      }
    }

    let tempNotes = Object.assign([], notes);
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      note.render();
      if (note.x > drum.x - 60 && note.x < drum.x) {
        for (let j = 0; j < keys.length; j++) {
          let key = keys[j];
          if (key.pressed && key.type === note.type) {
            key.pressed = false;
            drum.flash();
            score.up();
            spiritGauge.up();
            tempNotes.splice(i, 1);
          }
        }
      }
      note.move();
      if (note.x < -60) {
        tempNotes.splice(i, 1);
      }
    }
    notes = tempNotes;

    requestAnimationFrame(update);
  }
});
