export default class Score {
  constructor() {
    this.counter = document.getElementById('score-counter');
    this.score = 0;
  }

  render() {
    this.counter.innerHTML = this.score;
  }

  up() {
    let extra = Math.floor(100 * Math.random());
    this.score += 100 + extra;
  }
}
