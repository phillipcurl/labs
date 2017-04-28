import { LabsPage } from './app.po';

describe('labs App', () => {
  let page: LabsPage;

  beforeEach(() => {
    page = new LabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
