import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { ContextMenuModule } from 'ngx-contextmenu';
import { AddMusicComponent } from './add-music/add-music.component';


@NgModule({
  declarations: [MusicComponent, AddMusicComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    MusicRoutingModule,
    /* Context Menu */
    ContextMenuModule.forRoot(),
  ]
})
export class MusicModule { }
