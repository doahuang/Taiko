export default class TapArea {
  constructor(keys) {
    this.keys = keys;
    this.x = 200;
    this.y = 200;
  }

  register() {
    document.addEventListener('keyup', e => {
      if (this.keys.includes(e.key.toLowerCase())) {
        this.tap();
      }
    });
  }

  tap() {
    console.log('tap');

  }
}
