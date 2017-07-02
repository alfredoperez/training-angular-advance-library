import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'ngx-fa-input input'
})
export class InputRefDirective {
  public focus = false;

  constructor() {
  }

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }
}
