import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidepanelService {

  constructor(private http: HttpClient) { }

  getNews(params: any = {}) {
    return this.http.get('https://newsapi.org/v2/top-headlines', { params })
      .pipe(
        map((data: any) => {
          return data.articles.filter((e: any) => e.title && e.url);
        })
      );
  }
}
