import { Component, AfterViewInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationCancel, NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Web-Paddle';

  loading: boolean = false;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.initNavigationLoader();
  }

  initNavigationLoader(): void {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }
}
