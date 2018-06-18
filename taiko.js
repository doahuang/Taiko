import Drum from './drum.js';
import DrumKey from './drum_key.js';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const drum = new Drum();
drum.draw(ctx);

const keyA = new DrumKey(drum, 'a');
const keyS = new DrumKey(drum, 's');
const keyK = new DrumKey(drum, 'k');
const keyL = new DrumKey(drum, 'l');
keyA.register('kat');
keyS.register('don');
keyK.register('don2');
keyL.register('kat');
