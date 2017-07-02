import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxModalComponent } from './ngx-modal.component';
import { NgxModalOpenOnClickDirective } from './ngx-modal-open-on-click.directive';
import { NgxModalService } from './modal.service';

const COMPONENTS = [NgxModalComponent, NgxModalOpenOnClickDirective];
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class NgxModalModule {

  static  forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxModalModule,
      providers: [NgxModalService]
    };
  }
}



