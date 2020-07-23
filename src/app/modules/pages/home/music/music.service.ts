import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserData } from '../../authentication/authentication.interface';
import { map } from 'rxjs/operators';
import { AddMusicComponent } from './add-music/add-music.component';

export interface Music {
  id?: string;
  title: string;
  created_at?: any;
  created_by: string;
  updated_at: any;
  url: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private musicCollection: AngularFirestoreCollection<Music>;
  music: Observable<Music[]>;

  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog
  ) { }

  initMusic() {
    const userID = (JSON.parse(localStorage.getItem('user')) as UserData).uid;
    this.musicCollection = this.afs.collection<Music>(
      `users/${userID}/bookmarks`
    );
  }

  getMusic(params: any = {}): Observable<Music[]> {
    return this.musicCollection.snapshotChanges().pipe(
      map((music) => {
        return music.map((e: any) => {
          const data = e.payload.doc.data() as Music;
          const id = e.payload.doc.id;

          data.created_at = data.created_at.toDate();
          data.updated_at = data.updated_at.toDate();

          return { id, ...data };
        });
      })
    );
  }

  postMusic(music: Music) {
    this.musicCollection.add(music);
  }

  patchMusic(id: string, music: Music) {
    this.musicCollection.doc(id).update(music);
  }

  deleteMusic(id: string) {
    this.musicCollection.doc(id).delete();
  }

  convertFileToBase64(file: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onAddMusic() {
    const dialogRef = this.dialog.open(AddMusicComponent, {
      width: '40vw',
      data: {
        title: 'Add Song',
        music: null,
      },
      panelClass: 'matPrimaryDialogClass',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed =', result);
    });
  }

  onEditMusic(music: Music) {
    const dialogRef = this.dialog.open(AddMusicComponent, {
      width: '40vw',
      data: {
        title: 'Update Song',
        music,
      },
      panelClass: 'matPrimaryDialogClass',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed =', result);
    });
  }
}
