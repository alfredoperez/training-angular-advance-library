import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tab',
  templateUrl: './ngx-tab.component.html',
  styleUrls: ['./ngx-tab.component.scss']
})
export class NgxTabComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  selected = false;

  constructor() {
  }

  ngOnInit() {
  }

}
