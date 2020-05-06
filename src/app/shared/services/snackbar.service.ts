import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { ToasterData } from '../components/snackbar/snackbar-config';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  showInfo(data: ToasterData, duration: number = 5000) {
    data['type'] = 'info';
    data.showCloseIcon ? duration = 10000 : '';

    this._snackBar.openFromComponent(SnackbarComponent, {
      data,
      panelClass: ['snackbar', 'info'],
      duration,
      verticalPosition: 'top'
    })
  }

  showSuccess(data: ToasterData, duration: number = 5000) {
    data['type'] = 'success';
    data.showCloseIcon ? duration = 10000 : '';

    this._snackBar.openFromComponent(SnackbarComponent, {
      data,
      panelClass: ['snackbar', 'success'],
      duration,
      verticalPosition: 'top'
    })
  }

  showError(data: ToasterData, duration: number = 5000) {
    data['type'] = 'warning';
    data.showCloseIcon ? duration = 10000 : '';

    this._snackBar.openFromComponent(SnackbarComponent, {
      data,
      panelClass: ['snackbar', 'warning'],
      duration,
      verticalPosition: 'top'
    })
  }
}
