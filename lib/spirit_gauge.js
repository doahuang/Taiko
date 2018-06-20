export default class SpiritGauge {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.stage = document.getElementById('canvas').getContext('2d');
    this.spirit = 0;
    this.maxSpirit = 200;
    this.maxWidth = 400;
    this.full = false;
  }

  render() {
    let stage = this.stage;
    stage.beginPath();
    stage.rect(this.x, this.y, this.maxWidth, 40);
    stage.fillStyle = 'white';
    stage.fillRect(this.x, this.y, this.maxWidth, 40);
    stage.lineWidth = 3;
    stage.strokeStyle = 'black';
    stage.stroke();
    this.bar();
    this.onFire();
  }

  up() {
    if (this.spirit < this.maxSpirit) {
      this.spirit +=50;
    }
  }

  bar() {
    let width = this.spirit / this.maxSpirit * 400;
    this.stage.fillStyle = '#ffe92b';
    this.stage.fillRect(this.x + 3, this.y + 3, width, 34);
    if (width === this.maxWidth) {
      this.full = true;
    }
  }

  onFire() {
    if (!this.full) {
      return;
    }
    let fire = document.getElementById('fire');
    fire.classList.remove('hide');
  }
}
