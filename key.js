class Key {
  constructor(key) {
    this.key = key;
  }

  tap() {
    window.addEventListener('keydown', (e) => {
      console.log('working');
    })
  }
}

const key = new Key('something');
key.tap();
