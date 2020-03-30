import { Component, OnInit } from '@angular/core';
import { PaddleNavigation } from 'src/app/shared/interfaces/commons.interface';
import { navigation } from 'src/app/shared/navigation/navigation';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navItems: PaddleNavigation[];
  tooltipDelay: number;

  constructor() {
    this.navItems = navigation;
    this.tooltipDelay = 700;
  }

  ngOnInit(): void {
  }

}
