import { Component, OnInit } from "@angular/core";
import {
  WeatherService,
  Weather,
} from "src/app/shared/services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  weather: Weather;

  constructor(private _weather: WeatherService) {}

  async ngOnInit(): Promise<void> {
    this.weather = (await this._weather.initWeather()) as Weather;
    console.log(this.weather);
  }
}
