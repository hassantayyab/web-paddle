import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from "@angular/material/menu";
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';


@NgModule({
  entryComponents: [AddBookmarkComponent],
  declarations: [BookmarksComponent, AddBookmarkComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    // MaterialModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule { }
