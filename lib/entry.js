import TapArea from './tap_area.js';
import Drum from './drum.js';
import DrumKey from './drum_key.js';

document.addEventListener('DOMContentLoaded', () => {
  const moonlight = document.querySelector('.moonlight');
  const bumblebee = document.querySelector('.bumblebee');
  const canvas = document.getElementById('game-canvas');
  const stage = canvas.getContext('2d');
  const keys = ['a', 's', 'k', 'l'];

  const tapArea = new TapArea(keys);
  tapArea.register();
  const drum = new Drum(stage);
  drum.render();
  const keyA = new DrumKey(drum, 'a');
  const keyS = new DrumKey(drum, 's');
  const keyK = new DrumKey(drum, 'k');
  const keyL = new DrumKey(drum, 'l');
  keyA.register('kat');
  keyS.register('don');
  keyK.register('don2');
  keyL.register('kat');
});
