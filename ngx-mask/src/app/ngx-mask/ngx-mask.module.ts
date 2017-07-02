import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from './ngx-mask.directive';

@NgModule({
  declarations: [NgxMaskDirective],
  imports: [
    CommonModule
  ],
  exports: [NgxMaskDirective]
})
export class NgxMaskModule {

}
