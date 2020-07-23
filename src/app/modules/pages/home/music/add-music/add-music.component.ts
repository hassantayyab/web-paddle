import { Component, OnInit, Inject } from '@angular/core';
import { Music, MusicService } from '../music.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { paddleConstants } from 'src/app/shared/constants/constants';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ValidateURL } from 'src/app/shared/services';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  _constants = paddleConstants;

  addMusicForm: FormGroup;
  formSubmitted: boolean;

  music: Music;
  selectedFile: File;

  constructor(
    public dialogRef: MatDialogRef<AddMusicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _music: MusicService
  ) {
    this.music = data.music;
    this.initForm();
  }

  ngOnInit(): void { }

  initForm() {
    this.formSubmitted = false;

    this.addMusicForm = this.fb.group({
      title: [this.music ? this.music.title : '', [Validators.required]],
      url: [
        this.music ? this.music.url : '',
        [Validators.required, ValidateURL],
      ],
      thumbnail: [this.music ? this.music.thumbnail : '', [ValidateURL]],
    });
  }

  async onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    const file = await this._music.convertFileToBase64(this.selectedFile);
    console.log(file);
  }

  onChooseAction() {
    if (this.music) {
      this.updateMusic();
    } else {
      this.addMusic();
    }
  }

  addMusic() {
    this.formSubmitted = true;
    this.addMusicForm.markAllAsTouched();
    if (this.addMusicForm.invalid) { return; }

    const newMusic: Music = {
      title: this.addMusicForm.controls.title.value,
      url: this.addMusicForm.controls.url.value,
      thumbnail: this.addMusicForm.controls.thumbnail.value,
      created_at: firebase.firestore.Timestamp.fromDate(new Date()),
      created_by: 'Hassan Tayyab',
      updated_at: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    this._music.postMusic(newMusic);

    this.dialogRef.close();
  }

  updateMusic() {
    this.formSubmitted = true;
    this.addMusicForm.markAllAsTouched();
    if (this.addMusicForm.invalid) { return; }

    const updatedMusic: Music = {
      title: this.addMusicForm.controls.title.value,
      url: this.addMusicForm.controls.url.value,
      thumbnail: this.addMusicForm.controls.thumbnail.value,
      created_by: 'Hassan Tayyab',
      updated_at: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    this._music.patchMusic(this.music.id, updatedMusic);

    this.dialogRef.close();
  }

}
