export default class Note {
  constructor(vel) {
    this.x = 800;
    this.y = 130;
    this.vel = vel;
    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';
    this.type = color === 'red' ? 'don' : 'kat';
    this.image = new Image();
    this.image.src = `./gifs/${color}_note.png`;
  }

  move() {
    this.x -= this.vel;
  }
}
