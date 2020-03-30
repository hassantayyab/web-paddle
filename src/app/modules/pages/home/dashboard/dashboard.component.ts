import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/shared/interfaces/commons.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dahboardData: Dashboard[];

  constructor() {
    this.initializeDashboardData();
  }

  ngOnInit(): void {
  }

  initializeDashboardData() {
    this.dahboardData = [
      {
        id: 'bookmarks',
        title: 'Bookmarks',
        items: [
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
        ]
      },
      {
        id: 'music',
        title: 'Music',
        items: [
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
        ]
      },
      {
        id: 'stations',
        title: 'Stations',
        items: [
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          },
          {
            title: 'YouTube',
            description: 'Go to youtube channel',
            thumbnail: '/assets/images/YouTube-Logo.jpg',
            url: 'https://www.example.com'
          }
        ]
      }
    ]
  }

}
