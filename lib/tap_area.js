export default class TapArea {
  constructor(stage) {
    this.stage = stage;
    this.x = 200;
    this.y = 120;
  }

  render() {
    let stage = this.stage;

    stage.beginPath();
    stage.arc(this.x, this.y, 40, 0, 2 * Math.PI);
    stage.lineWidth = 2;
    stage.strokeStyle = 'grey';
    stage.stroke();

    stage.beginPath();
    stage.arc(this.x, this.y, 30, 0, 2 * Math.PI);
    stage.fillStyle = 'lightgrey';
    stage.fill();
  }

  register() {
    let keys = ['a', 's', 'k', 'l'];

    document.addEventListener('keyup', e => {
      if (keys.includes(e.key.toLowerCase())) {
        this.tap();
      }
    });
  }

  tap() {
    console.log('tap');
  }
}
