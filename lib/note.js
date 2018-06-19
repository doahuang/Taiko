export default class Note {
  constructor(vel, offset) {
    this.x = 800;
    // this.x = 800 + offset * Math.random() * 5;
    this.y = 100;
    this.vel = vel;
    let color = Math.floor(Math.random() * 2) ? 'red' : 'blue';
    this.image = new Image();
    this.image.src = `./gifs/${color}_note.png`;
  }

  move() {
    this.x -= this.vel;
  }
}
