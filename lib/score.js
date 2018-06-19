export default class Score {
  constructor() {
    this.counter = document.getElementById('counter');
    this.score = 0;
  }

  render() {
    this.counter.innerHTML = this.score;
  }

  up() {
    this.score += 100;
  }
}
