import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from '../news/news.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class SidepanelModule { }
