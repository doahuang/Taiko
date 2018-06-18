export default class Drum {
  constructor(stage) {
    this.stage = stage;
    this.x = 210;
    this.y = 130;

    this.beige = '#ffeecc';
  }

  render() {
    this.stage.clearRect(0, 0, 800, 500);
    this.drawCircle(50);
    this.drawCircle(40, 'lightgrey');
  }

  tap(note) {
    if (note === 'kat') {
      this.drawCircle(50, 'skyblue');
      this.drawCircle(40);
    } else {
      this.drawCircle(40, 'orangered');
    }

    window.setTimeout(() => this.render(), 100);
  }

  drawCircle(radius, color = 'white') {
    let stage = this.stage;

    stage.beginPath();
    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    stage.fillStyle = color;
    stage.fill();
    stage.strokeStyle = 'lightgrey';
    stage.lineWidth = 2;
    stage.stroke();
  }
}
