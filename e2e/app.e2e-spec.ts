import { FoodDirectoryPage } from './app.po';

describe('food-directory App', function() {
  let page: FoodDirectoryPage;

  beforeEach(() => {
    page = new FoodDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
