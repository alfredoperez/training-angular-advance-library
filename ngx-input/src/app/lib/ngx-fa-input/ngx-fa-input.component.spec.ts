import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFaInputComponent } from './ngx-fa-input.component';

describe('NgxFaInputComponent', () => {
  let component: NgxFaInputComponent;
  let fixture: ComponentFixture<NgxFaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
