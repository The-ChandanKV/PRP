// Landing Page Tests

const puppeteer = require('puppeteer');

describe('Landing Page Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000'); // Adjust to your local server URL
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Hero section displays correctly', async () => {
        const heroHead = await page.$eval('.hero-section h1', el => el.innerText);
        expect(heroHead).toBe('Your Bold Headline'); // Replace with actual headline text
    });

    test('CTAs are functional and styled', async () => {
        const primaryBtn = await page.$('.btn-primary');
        const secondaryBtn = await page.$('.btn-secondary');
        expect(await primaryBtn.evaluate(node => node.style.transform)).toBe('scale(1)'); // Before hover
        await primaryBtn.hover();
        expect(await primaryBtn.evaluate(node => node.style.transform)).toBe('scale(1.05)'); // After hover
    });

    test('Features section uses glassmorphism', async () => {
        const featureCard = await page.$('.feature-card');
        const bgColor = await featureCard.evaluate(node => window.getComputedStyle(node).backgroundColor);
        expect(bgColor).toMatch(/rgba\(.*\)/); // Check if it is translucent
    });

    test('Scroll animations trigger correctly', async () => {
        await page.evaluate(() => window.scrollTo(0, 500));
        const featureVisible = await page.$eval('.feature-card', el => {
            return el.getBoundingClientRect().top < window.innerHeight;
        });
        expect(featureVisible).toBe(true);
    });
});