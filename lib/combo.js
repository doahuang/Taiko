export default class Combo {
  constructor() {
    this.combo = 0;
    this.stage = document.getElementById('canvas').getContext('2d');
  }

  render() {
    let stage = this.stage;
  }

  up() {
    this.combo ++;
  }

  reset() {
    this.combo = 0;
  }
}
