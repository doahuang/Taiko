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
  let baseUrl = 'https://res.cloudinary.com/doahuang/video/upload/';
  bumblebee.src = baseUrl + 'v1529382816/bumblebee.ogg';
  lacompanella.src = baseUrl + 'v1529384916/lacampanella.ogg';
  overture.src = baseUrl + 'v1529382816/overture.ogg';
  bumblebee.bpm = 200;
  lacompanella.bpm = 170;
  overture.bpm = 170;

  const don = new Audio();
  const kat = new Audio();
  don.id = 'don';
  kat.id = 'kat';
  don.src = './sounds/don.mp3';
  kat.src = './sounds/kat.mp3';

  let songLib = [].concat(bumblebee, lacompanella, overture);
  let songId = Math.floor(Math.random() * songLib.length);
  let music = songLib[songId];
  music.volume = 0.5;

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

  const keyA = new DrumKey(drum, 'ArrowLeft');
  const keyB = new DrumKey(drum, 'ArrowRight');
  const drumKeys = [keyA, keyB];
  keyA.register(don);
  keyB.register(kat);

  function setupStage() {
    NotesArea();
    drum.render();
    score.render();
    spiritGauge.render();
    combo.render();
  }
  setupStage();

  let musicOn, gameOn, gameEnded;
  let msg = document.getElementById('msg');
  let restart = document.getElementById('restart');
  let modal = document.querySelector('.modal');
  let playPause = document.querySelector('.play-pause');

  playPause.addEventListener('click', () => togglePause());
  restart.addEventListener('click', () => location.reload());
  document.addEventListener('keydown', e => {
    if (e.code === 'Space' && !gameEnded) {
      togglePause();
      modal.classList.add('hide');
    }
    if (e.code === 'KeyR') {
      location.reload();
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
    gameOver();
  }

  function gameOver() {
    gameEnded = true;
    modal.classList.remove('hide');
    msg.innerHTML = 'Game Over!';
    msg.innerHTML += `<br/> You score is ${score.score}`;
    msg.innerHTML += `<br/> You max combo is ${combo.maxCombo}`;
    msg.innerHTML += `<br/> Press R to restart`;
  }

  let frames = 0;
  let notes = {};
  let vel = 4 + Math.random() * 3;

  function update() {
    if (gameEnded || !gameOn) {
      return;
    }

    stage.clearRect(0, 0, 800, 500);
    frames ++;

    setupStage();

    let bpm = music.bpm;
    let delay = Math.floor(3600 / bpm - Math.random() * vel / 2);
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
              combo.up();
              spiritGauge.up(combo.combo);
              score.up(spiritGauge.spirit);
              delete notes[id];
            } else {
              combo.reset();
            }
          }
        }
      }
      if (note.x < -40) {
        spiritGauge.down();
        combo.reset();
        delete notes[id];
      }
    }

    requestAnimationFrame(update);
  }
});
