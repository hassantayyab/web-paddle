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

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private toaster$: ToasterService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('ERROR =>', error);
        this.toaster$.show({
          type: 'warning',
          text: error.message
        });
        return throwError(error);
      })
    )
  }
}
