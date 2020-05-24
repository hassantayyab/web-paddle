import { Injectable } from "@angular/core";
import { paddleConstants } from "../constants/constants";
import { AbstractControl } from "@angular/forms";
import isURL from "validator/es/lib/isURL";

export function ValidateURL(
  control: AbstractControl
): { [key: string]: any } | null {
  if (control.value && !isURL(control.value, { require_protocol: true })) {
    return { invalid: true };
  }

  return null;
}

@Injectable({
  providedIn: "root",
})
export class HelpersService {
  /* ToolTips */
  newsToolTipPosition: string = paddleConstants.newsToolTipPositon;
  bookmarksToolTipPosition: string = paddleConstants.bookmarkToolTipPositon;

  constructor() {}

  openLinkInNewTab(url: string) {
    window.open(url, "_blank");
  }
}
