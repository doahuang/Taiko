class DrumKey {
  constructor(key, note) {
    this.key = key;
    this.note = note;
    this.registerKey();
  }

  registerKey() {
    document.addEventListener('keyup', e => {
      let keyUp = e.key.toLowerCase();
      if (this.key !== keyUp) {
        return;
      }
      const noteSound = document.querySelector(`.${this.note}`);
      noteSound.currentTime = 0;
      noteSound.play();
    });
  }
}

const keyA = new DrumKey('a', 'kat');
const keyS = new DrumKey('s', 'don');
const keyK = new DrumKey('k', 'don2');
const keyL = new DrumKey('l', 'kat');
