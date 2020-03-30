import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidenavComponent } from '../../components/layout/sidenav/sidenav.component';
import { SidepanelComponent } from '../../components/sidepanel/sidepanel.component';
import { NewsComponent } from '../../components/news/news.component';
import { WeatherComponent } from '../../components/weather/weather.component';
import { MusicPlayerComponent } from '../../components/music-player/music-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [HomeComponent, SidenavComponent, SidepanelComponent, NewsComponent, WeatherComponent, MusicPlayerComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
