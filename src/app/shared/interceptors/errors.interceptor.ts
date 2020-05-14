import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToasterService } from '../modules/toaster/toaster.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private _snackbar: SnackbarService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('ERROR =>', error);
        this._snackbar.showError({
          message: error.message
        });
        return throwError(error);
      })
    )
  }
}
