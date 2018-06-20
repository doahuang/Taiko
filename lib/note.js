export default class Note {
  constructor(vel) {
    this.x = 800;
    this.y = 205;
    this.vel = vel;
    this.id = Date.now();

    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';
    this.type = color === 'red' ? 'don' : 'kat';
    this.image = new Image();
    this.image.src = `./gifs/${color}_note.png`;

    this.stage = document.getElementById('canvas').getContext('2d');
  }

  move() {
    this.x -= this.vel;
  }

  render() {
    this.stage.drawImage(this.image, this.x, this.y);
  }
}
