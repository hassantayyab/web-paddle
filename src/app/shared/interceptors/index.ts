/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './http-config.interceptor';
import { ErrorsInterceptor } from './errors.interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true },
];
