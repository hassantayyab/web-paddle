import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Bookmark, BookmarksService } from '../bookmarks.service';
import * as firebase from 'firebase';
import { ValidateURL } from 'src/app/shared/services';
import { paddleConstants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss'],
})
export class AddBookmarkComponent implements OnInit {
  _constants = paddleConstants;

  addBookmarkForm: FormGroup;
  formSubmitted: boolean;

  bookmark: Bookmark;

  constructor(
    public dialogRef: MatDialogRef<AddBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _bookmarks: BookmarksService
  ) {
    this.bookmark = data.bookmark;
    this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.formSubmitted = false;

    this.addBookmarkForm = this.fb.group({
      title: [this.bookmark ? this.bookmark.title : '', [Validators.required]],
      url: [
        this.bookmark ? this.bookmark.url : '',
        [Validators.required, ValidateURL],
      ],
      thumbnail: [this.bookmark ? this.bookmark.thumbnail : '', [ValidateURL]],
    });
  }

  onChooseAction() {
    if (this.bookmark) {
      this.updateBookmark();
    } else {
      this.addBookmark();
    }
  }

  addBookmark() {
    this.formSubmitted = true;
    this.addBookmarkForm.markAllAsTouched();
    if (this.addBookmarkForm.invalid) { return; }

    const newBookmark: Bookmark = {
      title: this.addBookmarkForm.controls.title.value,
      url: this.addBookmarkForm.controls.url.value,
      thumbnail: this.addBookmarkForm.controls.thumbnail.value,
      created_at: firebase.firestore.Timestamp.fromDate(new Date()),
      created_by: 'Hassan Tayyab',
      updated_at: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    this._bookmarks.postBookmark(newBookmark);

    this.dialogRef.close();
  }

  updateBookmark() {
    this.formSubmitted = true;
    this.addBookmarkForm.markAllAsTouched();
    if (this.addBookmarkForm.invalid) { return; }

    const updatedBookmark: Bookmark = {
      title: this.addBookmarkForm.controls.title.value,
      url: this.addBookmarkForm.controls.url.value,
      thumbnail: this.addBookmarkForm.controls.thumbnail.value,
      created_by: 'Hassan Tayyab',
      updated_at: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    this._bookmarks.patchBookmark(this.bookmark.id, updatedBookmark);

    this.dialogRef.close();
  }
}
