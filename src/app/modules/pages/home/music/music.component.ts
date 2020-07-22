import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { Observable } from 'rxjs';
import { Music, MusicService } from './music.service';
import { slideInAnimation } from 'src/app/shared/animations/route-animations.animation';
import { HelpersService } from 'src/app/shared/services';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  animations: [slideInAnimation],
})
export class MusicComponent implements OnInit {
  @ViewChild(ContextMenuComponent)
  public basicMenu: ContextMenuComponent;

  buttonState = 'hide';
  music$: Observable<Music[]>;

  constructor(
    public el: ElementRef,
    public _music: MusicService,
    public _helpers: HelpersService
  ) { }

  ngOnInit(): void {
    this.fetchMusic();
  }

  @HostListener('scroll', ['$event'])
  scrollHandler($event) {
    console.log('scrolling...', event);
  }

  fetchMusic() {
    this.music$ = this._music.getMusic();
  }

  async onTakeAction(action: string, music: Music) {
    switch (action) {
      case 'edit':
        this._music.onEditMusic(music);
        break;

      case 'delete':
        // this._musics.deleteMusic(music.id);
        const isDelete: boolean = (await this._helpers.onDeleteDialog(
          music.id,
          'Delete Music'
        )) as boolean;
        isDelete ? this._music.deleteMusic(music.id) : '';
        break;
    }
  }

}
