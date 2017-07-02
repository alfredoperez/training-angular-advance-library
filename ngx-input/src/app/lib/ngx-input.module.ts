import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFaInputComponent } from './ngx-fa-input/ngx-fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';

const COMPONENTS = [NgxFaInputComponent, InputRefDirective];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class NgxInputModule {
}
