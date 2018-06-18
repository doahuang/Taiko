export default class DrumKey {
  constructor(drum, key) {
    this.drum = drum;
    this.key = key;
  }

  register(note) {
    document.addEventListener('keyup', e => {
      if (this.key === e.key.toLowerCase()) {
        this.play(note);
        this.drum.tap(note);
      }
    });
  }

  play(note) {
    note = document.querySelector(`.${note}`);
    note.currentTime = 0;
    note.play();
  }
}
