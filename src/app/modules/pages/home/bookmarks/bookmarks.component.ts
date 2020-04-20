import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations/route-animations.animation';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  animations: [slideInAnimation]
})
export class BookmarksComponent implements OnInit {
  buttonState = 'hide'

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

  bookmarks =
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
        {
          title: 'YouTube',
          description: 'Go to youtube channel',
          thumbnail: '/assets/images/YouTube-Logo.jpg',
          url: 'https://www.example.com'
        },
      ]
    }

  @HostListener('scroll', ['$event'])
  scrollHandler($event) {
    console.log("scrolling...", event);
  }

}
