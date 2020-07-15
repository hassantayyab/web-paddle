import { Component, AfterViewInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationCancel, NavigationEnd, RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Web-Paddle';

  loading = false;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.initNavigationLoader();
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
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
