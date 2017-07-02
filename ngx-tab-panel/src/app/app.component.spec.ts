import { TestBed, async } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By }              from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxTabComponent } from './ngx-tab/ngx-tab.component';
import { NgxTabPanelComponent } from './ngx-tab-panel/ngx-tab-panel.component';


describe('AppComponent', () => {

  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement,
    tabPanel: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NgxTabComponent, NgxTabPanelComponent
      ],
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();

  });


  it('should create the test application', async(() => {
    expect(component).toBeTruthy();
  }));


  it('should find only one tab inside the tab container', async(() => {

    const tabs = tabPanel.queryAll(By.css('.tab'));

    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it('should find the contact tab button marked as active', async(() => {

    const selectedButton = tabPanel.query(
      By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toContain('Contact');
  }));
  it('should display the contacts tab', async(() => {

    const contactEmail = tabPanel.query(
      By.css('.contact-email')).nativeElement;

    expect(contactEmail).toBeTruthy();

  }));

  it('should switch to the login tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    tabButtons[0].nativeElement.click();
    fixture.detectChanges();
    const loginEmail = tabPanel.query(
      By.css('.login-email')).nativeElement;
    expect(loginEmail).toBeTruthy();

    const selectedButton = tabPanel.query(
      By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toContain('Login');
  }));
});
