import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logError(msg: string) {
    if (!environment.production) {
      console.log('ERROR =>', msg);
    }
    else {
      // AppInsights
    }
  }
}
