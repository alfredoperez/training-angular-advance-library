import { NgxModalPage } from './app.po';

describe('ngx-modal App', () => {
  let page: NgxModalPage;

  beforeEach(() => {
    page = new NgxModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
