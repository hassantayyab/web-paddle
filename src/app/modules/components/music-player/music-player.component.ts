import { Component, OnInit } from '@angular/core';
import { HowlerPlayer } from 'src/app/shared/classes/howler-player.class';
import { song } from './song';
import { Howl } from 'howler';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  isMusicPlaying = false;
  public musicPlayer: HowlerPlayer;

  constructor() {
    this.musicPlayer = new HowlerPlayer([
      'https://cdns-preview-8.dzcdn.net/stream/c-837189582badf324936b245530f9637b-3.mp3'
    ]);

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

  ngOnInit(): void {
  }

  onMusicPause() {
    this.isMusicPlaying = false;
    this.musicPlayer.pause();
  }

  onMusicPlay() {
    this.isMusicPlaying = true;
    this.musicPlayer.play();
  }

}
