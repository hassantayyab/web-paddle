import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [AddBookmarkComponent],
  declarations: [BookmarksComponent, AddBookmarkComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
    // MaterialModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule { }
