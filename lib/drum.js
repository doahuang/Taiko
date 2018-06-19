export default class Drum {
  constructor(stage) {
    this.stage = stage;
    this.x = 210;
    this.y = 120;
  }

  render() {
    this.drawCircle(40, 'white', true);
    this.drawCircle(30, 'lightgrey');
  }

  tap(note) {
    if (note.className === 'kat') {
      this.drawCircle(40, 'skyblue');
      this.drawCircle(30, 'white');
    } else {
      this.drawCircle(30, 'orangered');
    }

    window.setTimeout(() => this.render(), 100);
  }

  drawCircle(radius, color, stroke) {
    let stage = this.stage;

    stage.beginPath();
    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    stage.fillStyle = color;
    stage.fill();
    if (!stroke) {
      return;
    }
    stage.strokeStyle = 'lightgrey';
    stage.lineWidth = 2;
    stage.stroke();
  }
}
