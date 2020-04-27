import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatButtonModule,
    FontAwesomeModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
