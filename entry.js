import Stage from './lib/stage.js';
import Drum from './lib/drum.js';
import DrumKey from './lib/drum_key.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const drum = new Drum(ctx);
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
