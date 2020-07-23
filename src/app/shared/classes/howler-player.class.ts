import { Howl } from 'howler';

import { Observable, Observer, Subject } from 'rxjs';

export interface SoundInterface {
  sourceUrl: string;
  howl: Howl;
}

export interface SoundProgressInterface {
  played: number;    //  tiempo transcurrido s
  remaining: number; //  timpo restante
  position: number;  //  0-1% reproducido
}

export class HowlerPlayer {

  private _sounds: Array<SoundInterface>;
  private _index: number;

  private $progress: Subject<SoundProgressInterface>;


  /** */
  constructor(playlist: Array<string>) {
    this._index = 0;
    this._sounds = playlist.map((pSong: string) => ({
      sourceUrl: pSong,
      howl: null
    }));

    this.$progress = new Subject();

    // this.play();

    // var sound = new Howl({
    //   src: ['https://cdns-preview-8.dzcdn.net/stream/c-837189582badf324936b245530f9637b-3.mp3'],
    //   autoplay: true,
    //   loop: true,
    //   volume: 0.5,
    //   onend: function() {
    //     console.log('Finished!');
    //   }
    // });
  }

  /** */
  public play(index: number = null) {
    if (index == null) {
      index = this._index;
    } else if (index < 0 || index >= this._sounds.length) {
      index = 0;
    }

    const sound = this._sounds[index];
    if (!sound.howl) {
      sound.howl = new Howl({
        src: [sound.sourceUrl],
        html5: true,
        autoplay: false,
        volume: 0.5,
        onplay: () => {
          requestAnimationFrame(this.seekStep);  //  PROGRESS STEP CALL
        },
        onseek: () => {
          // Start upating the progress of the track.
          requestAnimationFrame(this.seekStep);
        },
        onend: () => {
          this.skip('next');
        }
      });
    }
    // this.index = index;

    const howl = sound.howl;
    howl.play();
  }


  /** */
  public pause(): void {
    const sound = this._sounds[this._index].howl;
    if (sound) {
      sound.fade(1, 0, 500);
      sound.once('fade', () => {
        sound.pause();
        sound.volume(1);
      });
    }
  }


  /** */
  public stop(): void {
    const sound = this._sounds[this._index].howl;
    if (sound) {
      sound.fade(1, 0, 500);
      sound.once('fade', () => {
        sound.stop();
        sound.volume(1);
      });
    }
  }


  /** */
  public get index(): number {
    return this._index;
  }


  /** */
  public set index(index: number) {
    this.stop();
    this._index = index;
  }


  /** */
  public skip(direction: string = 'next'): void {
    let newIndex: number = this._index;
    if (direction === 'next') {
      newIndex = (newIndex + 1) >= this._sounds.length ? 0 : newIndex + 1;
    } else {
      newIndex = (newIndex - 1) < 0 ? this._sounds.length - 1 : newIndex - 1;
    }

    this.skipTo(newIndex);
  }


  /***/
  public skipTo(index: number) {
    if (index < 0 || index >= this._sounds.length) {
      index = 0;
    }

    this.stop();
    this.play(index);
  }


  /** */
  public fastforward(secs: number = 5): void {
    const sound = this._sounds[this._index].howl;
    const timeToSeek = sound.seek() + secs;

    if (timeToSeek >= sound.duration()) {
      this.skip();
    } else {
      sound.seek(timeToSeek);
    }
  }


  /** */
  public rewind(secs: number = 5): void {
    const sound = this._sounds[this._index].howl;
    let timeToSeek = sound.seek() - secs;

    timeToSeek = timeToSeek <= 0 ? 0 : timeToSeek;

    sound.seek(timeToSeek);
  }


  /** */
  private seekStep = () => {
    const sound = this._sounds[this._index].howl;

    if (sound.playing()) {
      const sSeek = sound.seek();
      const sDuration = sound.duration();
      const progress: SoundProgressInterface = {
        played: sSeek,
        remaining: sDuration - sSeek,
        position: Math.round((sSeek * 100) / sDuration)
      };
      this.$progress.next(progress);

      requestAnimationFrame(this.seekStep);
    }
  }


  /** */
  public onPlay(): Subject<SoundProgressInterface> {
    return this.$progress;
  }

}
