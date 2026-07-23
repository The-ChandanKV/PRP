// test_landing_page.js

// Import necessary libraries for testing
const puppeteer = require('puppeteer');

describe('Landing Page', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Adjust URL as necessary
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Page loads successfully', async () => {
    const title = await page.title();
    expect(title).toBe('Your Page Title'); // Replace with actual title
  });

  test('Hero section is visible', async () => {
    const heroVisible = await page.evaluate(() => {
      const hero = document.querySelector('.hero'); // Adjust the selector
      return hero !== null;
    });
    expect(heroVisible).toBe(true);
  });

  test('Feature cards are present', async () => {
    const featuresVisible = await page.evaluate(() => {
      const featureCards = document.querySelectorAll('.feature-card'); // Adjust the selector
      return featureCards.length > 0;
    });
    expect(featuresVisible).toBe(true);
  });

  test('Scroll animations trigger', async () => {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    const cardsAreVisible = await page.evaluate(() => {
      const featureCards = document.querySelectorAll('.feature-card'); // Adjust the selector
      return Array.from(featureCards).every(card => card.classList.contains('visible')); // Check animation class
    });
    expect(cardsAreVisible).toBe(true);
  });
});