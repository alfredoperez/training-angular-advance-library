import {
  AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef,
  ViewChild
} from '@angular/core';
import { NgxTabComponent } from '../ngx-tab/ngx-tab.component';

@Component({
  selector: 'ngx-tab-panel',
  templateUrl: './ngx-tab-panel.component.html',
  styleUrls: ['./ngx-tab-panel.component.scss']
})
export class NgxTabPanelComponent implements AfterContentInit {

  @ContentChildren(NgxTabComponent)
  tabs: QueryList<NgxTabComponent>;
  @Input()
  headerTemplate: TemplateRef<any>;

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(x => x.selected);
    if ( !selectedTab && this.tabs.first ) {
      this.tabs.first.selected = true;
    }
  }

  public selectTab(tab) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }
}
