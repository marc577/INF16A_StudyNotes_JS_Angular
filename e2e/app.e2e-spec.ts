import { ClassifyPage } from './app.po';

describe('classify App', () => {
  let page: ClassifyPage;

  beforeEach(() => {
    page = new ClassifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
