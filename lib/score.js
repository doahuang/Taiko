export default class Score {
  constructor() {
    this.counter = document.getElementById('score-counter');
    this.score = 0;
  }

  render() {
    this.counter.innerHTML = this.score;
  }

  up(spirit) {
    let multiplier = spirit / 100;
    let score = Math.floor(100 * multiplier + 100);
    this.score += score;
  }
}
