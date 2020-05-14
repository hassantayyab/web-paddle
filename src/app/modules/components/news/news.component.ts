import { Component, OnInit, Input } from '@angular/core';
import { paddleConstants } from 'src/app/shared/constants/constants';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsToolTipPosition: string = paddleConstants.newsToolTipPositon;
  @Input() newsData: any;

  constructor() { }

  ngOnInit(): void {
    // console.log('DATA =>', this.newsData);
  }

  openLinkInNewTab(url: string) {
    window.open(url, "_blank");
  }
}
