import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Card validation form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:4242';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should show ', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-id=validate-card-form]');
    const input = await form.$('[data-id=validate-card-input]');
    await input.type('5536913801114162');
    const submit = await form.$('[data-id=validate-card-submit]');
    submit.click();
    await page.waitFor('[data-id=mastercard].active');
  });
});
