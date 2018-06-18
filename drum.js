export default class Drum {
  constructor() {
    this.combo = 0;
  }

  draw(ctx) {
    ctx.arc(400, 500, 300, 0, 2 * Math.PI);
    ctx.fillStyle = 'skyblue';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(400, 500, 260, 0, 2 * Math.PI);
    ctx.fillStyle = 'orangered';
    ctx.fill();
  }

  play(note) {
    note = document.querySelector(`.${note}`);
    note.currentTime = 0;
    note.play();
  }
}
