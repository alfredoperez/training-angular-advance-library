import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabPanelComponent } from './ngx-tab-panel.component';

describe('NgxTabPanelComponent', () => {
  let component: NgxTabPanelComponent;
  let fixture: ComponentFixture<NgxTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
