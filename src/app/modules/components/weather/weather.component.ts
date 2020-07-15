import { Component, OnInit } from "@angular/core";
import {
  WeatherService,
  Weather,
} from "src/app/shared/services/weather.service";
import { HelpersService } from "src/app/shared/services";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  weather: Weather;
  windTooltip: string = "Wind speed";

  constructor(
    private _weather: WeatherService,
    public _helpers: HelpersService
  ) {}

  async ngOnInit(): Promise<void> {
    this.weather = (await this._weather.initWeather()) as Weather;
    console.log(this.weather);
  }
}
