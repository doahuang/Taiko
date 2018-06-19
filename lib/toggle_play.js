export default class TogglePlay {
  constructor() {
    this.gameOn = false;
    this.play = document.getElementById('play');
    this.pause = document.getElementById('pause');
  }

  render() {
    this.gameOn = this.gameOn ? false : true;
    this.play.classList.toggle('hide', this.gameOn);
    this.pause.classList.toggle('hide', !this.gameOn);
  }
}
