import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio.component';


@NgModule({
  declarations: [RadioComponent],
  imports: [
    CommonModule,
    RadioRoutingModule
  ]
})
export class RadioModule { }
