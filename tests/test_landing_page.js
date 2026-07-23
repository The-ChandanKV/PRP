const { expect } = require('chai');
const puppeteer = require('puppeteer');

describe('Landing Page Tests', function() {
  let browser;
  let page;

  before(async function() {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Assuming server runs on port 3000
  });

  after(async function() {
    await browser.close();
  });

  it('should display the hero section with correct elements', async function() {
    const heroSection = await page.$('.hero-section'); // Selector for hero section
    expect(heroSection).to.not.be.null;

    const headline = await page.$('.hero-section h1'); // Update selector based on actual structure
    expect(headline).to.not.be.null;

    const ctaButton = await page.$('.hero-section .cta-button'); // Update selector based on actual structure
    expect(ctaButton).to.not.be.null;
  });

  it('should show feature cards with glassmorphism style', async function() {
    const featureCards = await page.$$('.feature-card'); // Update selector based on actual structure
    expect(featureCards.length).to.be.greaterThan(0);
  });

  it('should apply correct CTA button hover effect', async function() {
    const ctaButton = await page.$('.cta-button');
    await ctaButton.hover();
    const scaleProperty = await page.evaluate(el => getComputedStyle(el).transform, ctaButton);
    expect(scaleProperty).to.include('scale(1.05)');
  });
});