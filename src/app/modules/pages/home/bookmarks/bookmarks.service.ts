import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AddBookmarkComponent } from "./add-bookmark/add-bookmark.component";
import { UserData } from "../../authentication/authentication.interface";

export interface Bookmark {
  id?: string;
  title: string;
  created_at?: any;
  created_by: string;
  updated_at: any;
  url: string;
  thumbnail: string;
}

@Injectable({
  providedIn: "root",
})
export class BookmarksService {
  private bookmarksCollection: AngularFirestoreCollection<Bookmark>;
  bookmarks: Observable<Bookmark[]>;

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    public dialog: MatDialog
  ) {
    this.initBookmarks();
  }

  initBookmarks() {
    const userID = (JSON.parse(localStorage.getItem("user")) as UserData).uid;
    this.bookmarksCollection = this.afs.collection<Bookmark>(
      `users/${userID}/bookmarks`
    );
  }

  getBookmarks(params: any = {}): Observable<Bookmark[]> {
    return this.bookmarksCollection.snapshotChanges().pipe(
      map((bookmarks) => {
        return bookmarks.map((e: any) => {
          const data = e.payload.doc.data() as Bookmark;
          const id = e.payload.doc.id;

          data.created_at = data.created_at.toDate();
          data.updated_at = data.updated_at.toDate();

          return { id, ...data };
        });
      })
    );
  }

  postBookmark(bookmark: Bookmark) {
    this.bookmarksCollection.add(bookmark);
  }

  patchBookmark(id: string, bookmark: Bookmark) {
    this.bookmarksCollection.doc(id).update(bookmark);
  }

  deleteBookmark(id: string) {
    this.bookmarksCollection.doc(id).delete();
  }

  onAddBookmark() {
    const dialogRef = this.dialog.open(AddBookmarkComponent, {
      width: "40vw",
      data: {
        title: "Add Bookmark",
        bookmark: null,
      },
      panelClass: "matDialogCustomClass",
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("The dialog was closed =", result);
    });
  }

  onEditBookmark(bookmark: Bookmark) {
    const dialogRef = this.dialog.open(AddBookmarkComponent, {
      width: "40vw",
      data: {
        title: "Update Bookmark",
        bookmark,
      },
      panelClass: "matDialogCustomClass",
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("The dialog was closed =", result);
    });
  }
}
