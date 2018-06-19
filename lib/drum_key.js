export default class DrumKey {
  constructor(drum, key) {
    this.drum = drum;
    this.key = key;
  }

  register(note) {
    this.type = note.className;

    document.addEventListener('keydown', e => {
      if (this.key === e.key.toLowerCase()) {
        this.pressed = true;
        note.currentTime = 0;
        note.play();
        this.drum.tap(note);
      }
    });

    document.addEventListener('keyup', e => {
      if (this.key === e.key.toLowerCase()) {
        this.pressed = false;
      }
    });
  }
}
