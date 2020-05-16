import { Component, OnInit, Input } from '@angular/core';
import { paddleConstants } from 'src/app/shared/constants/constants';
import { HelpersService } from 'src/app/shared/services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() newsData: any;

  constructor(public _helpers: HelpersService) { }

  ngOnInit(): void {
  }
}
