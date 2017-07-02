import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxModalService } from './modal.service';
@Directive({
  selector: '[ngxModalOpenOnClick]',

})
export class NgxModalOpenOnClickDirective implements OnInit, OnDestroy {


  elements: HTMLBaseElement[];

  @Input()
  set ngxModalOpenOnClick(els) {
    this.elements = els.length
      ? els : [els];
    this.elements.forEach(el => {
      el.addEventListener('click', this.clickHandler);
    });

  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);

  constructor(private modalService: NgxModalService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }


  ngOnInit(): void {
    this.modalService.close$
      .subscribe(() => this.viewContainer.clear());
  }

  ngOnDestroy(): void {
    this.elements.forEach(el => el
      .removeEventListener('click', this.clickHandler));
  }


}
