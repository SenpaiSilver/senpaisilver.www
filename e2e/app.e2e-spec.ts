import { SenpaisilverPage } from './app.po';

describe('senpaisilver App', () => {
  let page: SenpaisilverPage;

  beforeEach(() => {
    page = new SenpaisilverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
