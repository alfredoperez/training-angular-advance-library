import { NgxTabPanelPage } from './app.po';

describe('ngx-tab-panel App', () => {
  let page: NgxTabPanelPage;

  beforeEach(() => {
    page = new NgxTabPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
