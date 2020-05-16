import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  addBookmarkForm: FormGroup;
  formSubmitted: boolean;

  constructor(public dialogRef: MatDialogRef<AddBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formSubmitted = false;

    this.addBookmarkForm = this.fb.group({
      title: ['', [Validators.required]],
      url: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.addBookmarkForm.invalid) return;
  }

}
