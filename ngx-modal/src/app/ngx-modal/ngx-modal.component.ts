import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgxModalService } from './modal.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.scss']
})
export class NgxModalComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;

  @Input()
  hideOnEsc: true;

  @Input()
  hideOnClickOutside: true;
  @Input()
  context: any;

  constructor(private modalService: NgxModalService,
              private eventManager: EventManager) {
  }


  ngOnInit() {
    if ( this.hideOnEsc ) {
      this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
          this.close();
        }
      );
    }

  }

  public onClickOutsideModal() {
    if ( this.hideOnClickOutside ) {
      this.close();
    }
  }

  public cancelClick(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  public close() {
    this.modalService.close();
  }

}
