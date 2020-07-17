import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  ViewChild,
} from "@angular/core";
import { slideInAnimation } from "src/app/shared/animations/route-animations.animation";
import { BookmarksService, Bookmark } from "./bookmarks.service";
import { Observable } from "rxjs";
import { HelpersService } from "src/app/shared/services";
import { ContextMenuComponent } from "ngx-contextmenu";

@Component({
  selector: "app-bookmarks",
  templateUrl: "./bookmarks.component.html",
  styleUrls: ["./bookmarks.component.scss"],
  animations: [slideInAnimation],
})
export class BookmarksComponent implements OnInit {
  @ViewChild(ContextMenuComponent)
  public basicMenu: ContextMenuComponent;

  buttonState = "hide";
  bookmarks$: Observable<Bookmark[]>;

  constructor(
    public el: ElementRef,
    public _bookmarks: BookmarksService,
    public _helpers: HelpersService
  ) {}

  ngOnInit(): void {
    this.fetchBookmarks();
  }

  @HostListener("scroll", ["$event"])
  scrollHandler($event) {
    console.log("scrolling...", event);
  }

  fetchBookmarks() {
    this.bookmarks$ = this._bookmarks.getBookmarks();
  }

  async onTakeAction(action: string, bookmark: Bookmark) {
    switch (action) {
      case "edit":
        this._bookmarks.onEditBookmark(bookmark);
        break;

      case "delete":
        // this._bookmarks.deleteBookmark(bookmark.id);
        const isDelete: boolean = (await this._helpers.onDeleteDialog(
          bookmark.id,
          "Delete Bookmark"
        )) as boolean;
        isDelete ? this._bookmarks.deleteBookmark(bookmark.id) : "";
        break;
    }
  }
}