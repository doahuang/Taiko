export default class Combo {
  constructor() {
    this.combo = 0;
    this.counter = document.getElementById('combo');
  }

  render() {
    if (this.combo) {
      this.counter.innerHTML = `${this.combo} combo`;
    } else {
      if (!this.counter.innerHTML) {
        return;
      }
      this.counter.innerHTML = 'miss';
      this.hide();
    }
  }

  show() {
    this.counter.classList.remove('bounceOutRight');
    this.counter.classList.add('bounceInRight');
  }

  hide() {
    this.counter.classList.remove('bounceInRight');
    this.counter.classList.add('bounceOutRight');
  }

  up() {
    this.combo ++;
    this.show();
  }

  reset() {
    this.combo = 0;
    this.hide();
  }
}
