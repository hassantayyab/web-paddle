import { Injectable } from "@angular/core";
import { paddleConstants } from "../constants/constants";
import { AbstractControl } from "@angular/forms";
import isURL from "validator/es/lib/isURL";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDialogComponent } from "../components/delete-dialog/delete-dialog.component";

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

  constructor(public dialog: MatDialog) {}

  openLinkInNewTab(url: string) {
    window.open(url, "_blank");
  }

  onDeleteDialog(id: string, title: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: "25vw",
        data: {
          title,
          id,
        },
        panelClass: "matDeleteDialogClass",
      });

      dialogRef.afterClosed().subscribe((result: boolean) => {
        console.log("Delete dialog was closed =", result);
        resolve(result);
      });
    });
  }
}
