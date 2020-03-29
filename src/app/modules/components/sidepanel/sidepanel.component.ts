import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit {
  newsSource: any = []

  constructor() { }

  ngOnInit(): void {
    const data = {
      title: 'Guide to UI/UX Designer',
      description: 'To be good designer it\'s not enough to know a basic soft like Sketch or Adobe XD.',
      thumbnail: 'assets/images/news-placeholder.png',
      source: {
        name: 'UX Planet',
        logo: 'assets/images/uxplanet.png'
      },
      timestamp: '1 day ago'
    }

    for (let i = 0; i < 12; i++) {
      this.newsSource = [...this.newsSource, data];
    }
  }

}
