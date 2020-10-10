/* eslint-disable */
import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);
describe('Card validation form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:4242';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });


    browser = await puppetteer.launch({
      // headless: true,
      // devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Should be Mastercard', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-id=validate-card-form]');
    const input = await form.$('[data-id=validate-card-input]');
    await input.type('5536913801114162');
    const submit = await form.$('[data-id=validate-card-submit]');
    submit.click();
    await page.waitFor('[data-id=mastercard].active');
  }),
  test('Should be Visa', async () => {
    const form = await page.$('[data-id=validate-card-form]');
    const input = await form.$('[data-id=validate-card-input]');
    await input.click({clickCount: 16});
    await input.press('Backspace'); 
    await input.type('4276314268549132');
    const submit = await form.$('[data-id=validate-card-submit]');
    submit.click();
    await page.waitFor('[data-id=visa].active');
  }),
  test('Should be Mir', async () => {
    const form = await page.$('[data-id=validate-card-form]');
    const input = await form.$('[data-id=validate-card-input]');
    await input.click({clickCount: 16});
    await input.press('Backspace'); 
    await input.type('2591463395745613');
    const submit = await form.$('[data-id=validate-card-submit]');
    submit.click();
    await page.waitFor('[data-id=mir].active');
  })
});
