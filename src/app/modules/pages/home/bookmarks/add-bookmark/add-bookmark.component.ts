import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Bookmark, BookmarksService } from '../bookmarks.service';
import * as firebase from "firebase";
import { ValidateURL } from 'src/app/shared/services';
import { paddleConstants } from 'src/app/shared/constants/constants';

@Component({
  selector: "app-add-bookmark",
  templateUrl: "./add-bookmark.component.html",
  styleUrls: ["./add-bookmark.component.scss"],
})
export class AddBookmarkComponent implements OnInit {
  _constants = paddleConstants;

  addBookmarkForm: FormGroup;
  formSubmitted: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _bookmarks: BookmarksService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formSubmitted = false;

    this.addBookmarkForm = this.fb.group({
      title: ["", [Validators.required]],
      url: ["", [Validators.required, ValidateURL]],
      thumbnail: ["", [Validators.required, ValidateURL]],
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    this.addBookmarkForm.markAllAsTouched();
    if (this.addBookmarkForm.invalid) return;

    const newBookmark: Bookmark = {
      title: this.addBookmarkForm.controls["title"].value,
      url: this.addBookmarkForm.controls["url"].value,
      thumbnail: this.addBookmarkForm.controls["thumbnail"].value,
      created_at: firebase.firestore.Timestamp.fromDate(new Date()),
      created_by: "Hassan Tayyab",
      updated_at: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    this._bookmarks.postBookmark(newBookmark);

    this.dialogRef.close();
  }
}
