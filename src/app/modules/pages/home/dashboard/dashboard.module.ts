import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
