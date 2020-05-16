import { Injectable } from '@angular/core';
import { paddleConstants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  /* ToolTips */
  newsToolTipPosition: string = paddleConstants.newsToolTipPositon;
  bookmarksToolTipPosition: string = paddleConstants.bookmarkToolTipPositon;

  constructor() { }

  openLinkInNewTab(url: string) {
    window.open(url, "_blank");
  }
}
