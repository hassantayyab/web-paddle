import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MaterialModule } from './shared/modules/material/material.module';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ContextMenuModule } from 'ngx-contextmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { httpInterceptorProviders } from './shared/interceptors';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { ToasterModule } from './shared/modules/toaster/toaster.module';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, SnackbarComponent, DeleteDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    /* Material */
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    // MaterialModule,
    BrowserAnimationsModule,
    /* Firebase */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToasterModule.forRoot(),
    /* Context Menu */
    // ContextMenuModule.forRoot()
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
