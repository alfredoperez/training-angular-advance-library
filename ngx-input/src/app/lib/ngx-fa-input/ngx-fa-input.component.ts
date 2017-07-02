import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'ngx-fa-input',
  templateUrl: './ngx-fa-input.component.html',
  styleUrls: ['./ngx-fa-input.component.scss']
})
export class NgxFaInputComponent implements AfterContentInit {


  @Input()
  public icon: string;

  @ContentChild(InputRefDirective)
  public input: InputRefDirective;

  constructor() {
  }

  ngAfterContentInit(): void {
    if ( !this.input ) {
      console.error('the component is not ');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input
      ? this.input.focus
      : false;
  }

  get classes() {
    const cssClasses = {};
    if ( this.icon ) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
