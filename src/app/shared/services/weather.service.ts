import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

export interface Address {
  country: string;
  country_code: string;
  county: string;
  postcode: string;
  road: string;
  state: string;
  suburb: string;
  town: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  coords: Coordinates;

  constructor(private http: HttpClient) {}

  async initWeather(): Promise<Weather> {
    this.coords = await this.fetchCurrentLocationData();
    return this.fetchCurrentWeather();
  }

  fetchCurrentLocationData(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
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
        'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        'The request to get user location timed out.';
        break;
      default:
        'An unknown error occurred.';
        break;
    }
  }

  fetchCurrentWeather(): Promise<Weather> {
    return new Promise((resolve, reject) => {
      const params: any = {
        lat: this.coords.latitude,
        lon: this.coords.longitude,
        exclude: 'minutely,hourly,daily',
        units: 'metric',
        appid: environment.weatherApi.key,
      };

      this.http
        .get('https://api.openweathermap.org/data/2.5/onecall', {
          params,
        })
        .subscribe(
          (result: any) => {
            resolve(result.current);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  initAddress(): Promise<Address> {
    return new Promise((resolve, reject) => {
      const params: any = {
        key: environment.address.key,
        lat: this.coords.latitude,
        lon: this.coords.longitude,
        format: 'json'
      };

      this.http
        .get('https://eu1.locationiq.com/v1/reverse.php', {
          params,
        })
        .subscribe(
          (result: any) => {
            resolve(result.address);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
