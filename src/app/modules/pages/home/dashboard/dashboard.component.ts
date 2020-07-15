import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/shared/interfaces/commons.interface';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UserData } from '../../authentication/authentication.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dahboardData: Dashboard[];
  user: UserData;

  constructor(public _auth: AuthenticationService) {
    this.initializeDashboardData();
  }

  ngOnInit(): void {
    this._auth.user$.subscribe((result: UserData) => this.user = result)
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
