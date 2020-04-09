import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { NewsComponent } from '../news/news.component';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    MatRippleModule
  ]
})
export class SidepanelModule { }
