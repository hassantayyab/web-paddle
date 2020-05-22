import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations/route-animations.animation';
import { BookmarksService, Bookmark } from './bookmarks.service';
import { Observable } from 'rxjs';
import { HelpersService } from 'src/app/shared/services';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  animations: [slideInAnimation]
})
export class BookmarksComponent implements OnInit {
  buttonState = 'hide';
  bookmarks$: Observable<Bookmark[]>;

  constructor(public el: ElementRef, public _bookmarks: BookmarksService, public _helpers: HelpersService) { }

  ngOnInit(): void {
    this.fetchBookmarks();
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

  fetchBookmarks() {
    this.bookmarks$ = this._bookmarks.getBookmarks();
  }
}
