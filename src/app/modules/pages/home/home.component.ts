import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UserData } from "../authentication/authentication.interface";
import { AuthenticationService } from "../authentication/authentication.service";
import { WeatherService } from "src/app/shared/services/weather.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  user: UserData;

  constructor(public _auth: AuthenticationService) {}

  ngOnInit(): void {
    this._auth.user$.subscribe((result: UserData) => (this.user = result));
  }

  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
