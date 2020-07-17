import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export interface Weather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather?: WeatherEntity[] | null;
}

export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  async initWeather(): Promise<Weather> {
    const coords: Coordinates = await this.fetchCurrentLocationData();
    return this.fetchCurrentWeather(coords);
  }

  fetchCurrentLocationData(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          console.log(position);
          resolve(position.coords);
        },
        (error: PositionError) => {
          this.showError(error);
          reject(error);
        }
      );
    });
  }

  showError(error: PositionError) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        "The request to get user location timed out.";
        break;
      default:
        "An unknown error occurred.";
        break;
    }
  }

  fetchCurrentWeather(coords: Coordinates): Promise<Weather> {
    return new Promise((resolve, reject) => {
      const params: any = {
        lat: coords.latitude,
        lon: coords.longitude,
        exclude: "minutely,hourly,daily",
        units: "metric",
        appid: environment.weatherApi.key,
      };

      this.http
        .get("https://api.openweathermap.org/data/2.5/onecall", {
          params,
        })
        .subscribe(
          (result: any) => {
            console.log(result);
            resolve(result.current);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}