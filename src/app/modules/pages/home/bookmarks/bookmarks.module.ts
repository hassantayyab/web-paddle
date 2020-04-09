import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    // MaterialModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule { }
