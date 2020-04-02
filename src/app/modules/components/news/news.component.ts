import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() newsData: any;

  constructor() { }

  ngOnInit(): void {
    // console.log('DATA =>', this.newsData);
  }
}