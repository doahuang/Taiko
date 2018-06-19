export default class Drum {
  constructor(stage) {
    this.stage = stage;
    this.x = 190;
    this.y = 235;
    this.colorRim = 'white';
    this.colorCenter = 'lightgrey';
  }

  render() {
    this.drawCircle(40, this.colorRim);
    this.drawCircle(30, this.colorCenter);
  }

  tap(note) {
    if (note.className === 'kat') {
      this.colorRim = 'skyblue';
    } else {
      this.colorCenter = 'orangered';
    }

    window.setTimeout(() => {
      this.colorRim = 'white';
      this.colorCenter = 'lightgrey';
    }, 100);
  }

  drawCircle(radius, color, stroke) {
    let stage = this.stage;
    stage.beginPath();
    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    stage.fillStyle = color;
    stage.fill();
    // if (!stroke) {
    //   return;
    // }
    // stage.strokeStyle = 'black';
    // stage.lineWidth = 2;
    // stage.stroke();
  }

  flash() {
    let stage = this.stage;
    stage.beginPath();
    stage.fillStyle = 'yellow';
    stage.fillRect(150, 150, 80, 160);
  }
}
