import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // clone request and replace 'http://' with 'https://' at the same time
    // const secureReq = request.clone({
    //   url: request.url.replace('http://', 'https://')
    // });

    // Get Token from local storage
    const token: string = localStorage.getItem('token');

    // Check if news api
    const isNewsApi = request.url.includes('newsapi.org');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (isNewsApi) {
      request = request.clone({ headers: request.headers.set('X-Api-Key', environment.newsApi.key) });
    } else {
      if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    }



    return next.handle(request);
  }
}
