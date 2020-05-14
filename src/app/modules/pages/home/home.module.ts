import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidenavComponent } from '../../components/layout/sidenav/sidenav.component';
import { SidepanelComponent } from '../../components/sidepanel/sidepanel.component';
import { NewsComponent } from '../../components/news/news.component';
import { WeatherComponent } from '../../components/weather/weather.component';
import { MusicPlayerComponent } from '../../components/music-player/music-player.component';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    SidepanelComponent,
    NewsComponent,
    WeatherComponent,
    MusicPlayerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    InfiniteScrollModule,
    // MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
