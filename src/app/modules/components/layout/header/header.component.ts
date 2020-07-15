import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/pages/authentication/authentication.service';
import { UserData } from 'src/app/modules/pages/authentication/authentication.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input('user') user: UserData;

  constructor(public auth$: AuthenticationService) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.user);
  }
}
