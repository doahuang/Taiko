export default class Drum {
  constructor(stage) {
    this.stage = stage;
    this.x = 400;
    this.y = 500;

    this.beige = '#ffeecc';
  }

  render() {
    // this.stage.clearRect(100, 200, 600, 300);
    this.stage.clearRect(0, 0, 800, 500);

    this.drawCircle(300);
    this.drawCircle(260);
  }

  tap(note) {
    if (note === 'kat') {
      this.drawCircle(300, 'skyblue');
      this.drawCircle(260);
    } else {
      this.drawCircle(260, 'orangered');
    }

    window.setTimeout(() => this.render(), 100);
  }

  drawCircle(radius, color = 'white') {
    let stage = this.stage;

    stage.beginPath();
    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    stage.fillStyle = color;
    stage.fill();
    stage.lineWidth = 2;
    stage.stroke();
  }
}
