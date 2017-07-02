import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgxTabComponent } from './ngx-tab/ngx-tab.component';
import { NgxTabPanelComponent } from './ngx-tab-panel/ngx-tab-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxTabComponent,
    NgxTabPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
