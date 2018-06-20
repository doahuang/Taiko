import Drum from './drum.js';
import DrumKey from './drum_key.js';
import Note from './note.js';
import Score from './score.js';
import SpiritGauge from './spirit_gauge.js';
import Combo from './combo.js';
import TogglePlay from './toggle_play.js';
import ToggleMusic from './toggle_music.js';

document.addEventListener('DOMContentLoaded', () => {
  const bumblebee = document.createElement('audio');
  const lacompanella = document.createElement('audio');
  const overture = document.createElement('audio');
  bumblebee.src = 'https://res.cloudinary.com/doahuang/video/upload/v1529382816/bumblebee.ogg';
  lacompanella.src = 'https://res.cloudinary.com/doahuang/video/upload/v1529384916/lacampanella.ogg';
  overture.src = 'https://res.cloudinary.com/doahuang/video/upload/v1529382816/overture.ogg';
  const don = document.getElementById('don');
  const kat = document.getElementById('kat');
  let songLib = [].concat(bumblebee, lacompanella, overture);
  let songId = Math.floor(Math.random() * songLib.length);
  let music = songLib[songId];
  const toggleMusic = new ToggleMusic(music);
  const togglePlay = new TogglePlay();

  const canvas = document.getElementById('canvas');
  const stage = canvas.getContext('2d');
  const score = new Score();
  const spiritGauge = new SpiritGauge();
  const combo = new Combo();
  const drum = new Drum();

  function NotesArea() {
    stage.beginPath();
    stage.lineWidth = 5;
    stage.moveTo(0, 150);
    stage.lineTo(800, 150);
    stage.stroke();
    stage.fillStyle = 'lightgrey';
    stage.fillRect(0, 150, 800, 200);
    stage.fillStyle = 'black';
    stage.fillRect(0, 310, 800, 40);
    stage.fill();
  }

  const keyA = new DrumKey(drum, 'd');
  const keyB = new DrumKey(drum, 'f');
  const keyC = new DrumKey(drum, 'j');
  const keyD = new DrumKey(drum, 'k');
  const drumKeys = [keyA, keyB, keyC, keyD];
  keyA.register(kat);
  keyB.register(don);
  keyC.register(don);
  keyD.register(kat);

  function setupStage() {
    NotesArea();
    drum.render();
    score.render();
    spiritGauge.render();
    combo.render();
  }

  setupStage();

  let musicOn, gameOn, gameEnded;
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

  let frames = 0;
  let notes = {};
  let vel = 4 + Math.random() * 3;

  function miss() {
    spiritGauge.down();
    combo.reset();
  }

  function update() {
    if (gameEnded || !gameOn) {
      return;
    }

    stage.clearRect(0, 0, stage.canvas.length, stage.canvas.height);
    frames ++;

    setupStage();

    let delay = 10 + Math.floor(Math.random() * 80 / vel);
    let notesKeys = Object.keys(notes);

    if (frames % delay === 0) {
      if (notesKeys.length < vel) {
        let note = new Note(vel);
        notes[note.id] = note;
        frames = 0;
      }
    }

    for (let i = 0; i < notesKeys.length; i++) {
      let id = notesKeys[i];
      let note = notes[id];
      note.render();
      note.move();

      if (note.x > drum.x - 60 && note.x < drum.x) {
        for (let j = 0; j < drumKeys.length; j++) {
          let key = drumKeys[j];
          if (key.pressed) {
            key.pressed = false;
            drum.flash();
            if (key.type === note.type) {
              score.up();
              spiritGauge.up();
              combo.up();
              delete notes[id];
            } else {
              combo.reset();
            }
          }
        }
      }
      if (note.x < -40) {
        miss();
        delete notes[id];
      }
    }

    requestAnimationFrame(update);
  }
});
