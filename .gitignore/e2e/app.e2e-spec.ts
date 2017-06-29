import { VodPage } from './app.po';

describe('vod App', () => {
  let page: VodPage;

  beforeEach(() => {
    page = new VodPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
