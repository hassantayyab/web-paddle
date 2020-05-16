import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

export interface Bookmark {
  title: string;
  created_at: Date;
  created_by: string;
  updated_at: Date;
  url: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  private bookmarksCollection: AngularFirestoreCollection<Bookmark>;
  bookmarks: Observable<Bookmark[]>;

  constructor(private http: HttpClient, private afs: AngularFirestore, public dialog: MatDialog) {
    this.initBookmarks();
  }

  initBookmarks() {
    this.bookmarksCollection = this.afs.collection<Bookmark>('bookmarks');
  }

  getBookmarks(params: any = {}): Observable<Bookmark[]> {
    return this.bookmarksCollection.valueChanges()
      .pipe(
        map(bookmarks => {
          return bookmarks.map((e: any) => {
            e.created_at = e.created_at.toDate();
            e.updated_at = e.updated_at.toDate();
            return e;
          })
        })
      )
  }

  onAddBookmark() {
    const dialogRef = this.dialog.open(AddBookmarkComponent, {
      width: '40vw',
      data: {
        title: 'Add Bookmark'
      },
      panelClass: 'matDialogCustomClass'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed =', result);
    });
  }
}
