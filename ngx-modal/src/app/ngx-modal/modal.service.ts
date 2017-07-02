import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NgxModalService {
  private subject = new Subject();
  public close$: Observable<any> = this.subject.asObservable();

  constructor() {
  }

  public close() {
    this.subject.next();
  }
}
