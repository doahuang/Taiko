import Drum from './drum.js';

export default class DrumKey {
  constructor(drum, key) {
    this.drum = drum;
    this.key = key;
  }

  register(note) {
    document.addEventListener('keyup', e => {
      if (this.key === e.key.toLowerCase()) {
        this.drum.play(note);
      }
    });
  }
}
