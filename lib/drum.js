export default class Drum {
  constructor(stage) {
    this.stage = stage;
    this.x = 400;
    this.y = 500;
  }

  render() {
    this.drawCircle(300, 'skyblue');
    this.drawCircle(260, 'orangered');
  }

  drawCircle(radius, color) {
    let stage = this.stage;
    stage.beginPath();
    stage.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    stage.fillStyle = color;
    stage.fill();
  }

  play(note) {
    note = document.querySelector(`.${note}`);
    note.currentTime = 0;
    note.play();
  }
}
