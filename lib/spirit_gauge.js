export default class SpiritGauge {
  constructor() {
    this.x = 340;
    this.y = 67;
    this.stage = document.getElementById('canvas').getContext('2d');
    this.spirit = 0;
    this.maxSpirit = 100;
    this.maxWidth = 400;
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
    this.lit();
  }

  up() {
    if (this.spirit < this.maxSpirit) {
      this.spirit ++;
    }
  }

  down() {
    if (this.spirit > 0) {
      this.spirit --;
    }
  }

  bar() {
    let width = this.spirit / this.maxSpirit * this.maxWidth;
    if (width >= this.maxWidth) {
      width = this.maxWidth;
      this.full = true;
    } else {
      this.full = false;
    }
    this.stage.fillStyle = '#ffe92b';
    this.stage.fillRect(this.x + 3, this.y + 3, width, 34);
  }

  lit() {
    let fire = document.getElementById('fire');
    if (this.full) {
      fire.classList.remove('hide');
    } else {
      fire.classList.add('hide');
    }
  }
}
