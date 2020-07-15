import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatButtonModule,
    LandingRoutingModule,
    FontAwesomeModule
  ]
})
export class LandingModule { }
