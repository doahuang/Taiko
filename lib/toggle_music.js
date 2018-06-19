export default class ToggleMusic {
  constructor(music) {
    this.music = music;
    this.volumeOn = document.getElementById('volume-on');
    this.volumeOff = document.getElementById('volume-off');
    this.musicMute = document.querySelector('.music-mute');
    this.init();
  }

  init() {
    this.musicMute.addEventListener('click', e => this.render());
    document.addEventListener('keypress', e => {
      if (e.key === 'm') {
        this.render();
      }
    });
  }

  render() {
    this.music.muted = this.music.muted ? false : true;
    this.volumeOn.classList.toggle('hide', this.music.muted);
    this.volumeOff.classList.toggle('hide', !this.music.muted);
  }
}
