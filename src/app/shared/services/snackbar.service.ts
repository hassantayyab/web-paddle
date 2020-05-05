import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { ToasterData } from '../components/snackbar/snackbar-config';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  show(data: ToasterData) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data,
      panelClass: ['snackbar', 'warning'],
      duration: 9999999999999,
      verticalPosition: 'top'
    })
  }
}
