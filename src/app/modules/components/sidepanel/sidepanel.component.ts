import { Component, OnInit } from '@angular/core';
import { SidepanelService } from './sidepanel.service';
import { Subscription, Observable } from 'rxjs';
import { paddleConstants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit {
  loading: boolean = false;
  spinnerDiameter: number = paddleConstants.spinnerDiameter;

  newsSource: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;

  constructor(public _sidePanel: SidepanelService) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(pageNumber: number = 1) {
    console.log('scrolled! =', pageNumber);
    this.loading = true;

    this.pageNumber = pageNumber;

    const options = {
      // q: 'bitcoin',
      language: 'en',
      sortBy: 'popularity',
      pageSize: this.pageSize,
      page: pageNumber
    }

    this._sidePanel.getNews(options).subscribe(
      (result: any) => {
        console.log('result', result);
        this.newsSource = [...this.newsSource, ...result];
        this.loading = false;
      }
    )
  }

}
