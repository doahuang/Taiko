export default class DrumKey {
  constructor(drum, key) {
    this.drum = drum;
    this.key = key;
  }

  register(note) {
    document.addEventListener('keydown', e => {
      if (this.key === e.key.toLowerCase()) {
        this.play(note);
        this.drum.tap(note);
      }
    });
  }

  play(note) {
    note.currentTime = 0;
    note.play();
  }
}
