// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './playwright/e2e/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000
  },
  projects: [
    // Desktop Browsers
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Desktop Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'Desktop Safari', use: { ...devices['Desktop Safari'] } },

    // iPhone Mobile Devices
    { name: 'iPhone 13 Portrait', use: { ...devices['iPhone 13'] } },
    { name: 'iPhone 13 Landscape', use: { ...devices['iPhone 13 landscape'] } },
    { name: 'iPhone 14 Portrait', use: { ...devices['iPhone 14'] } },

    // Android Mobile Devices
    { name: 'Pixel 5 Portrait', use: { ...devices['Pixel 5'] } },
    { name: 'Pixel 5 Landscape', use: { ...devices['Pixel 5 landscape'] } },
    { name: 'Galaxy S9 Portrait', use: { ...devices['Galaxy S9+'] } },

    // Tablets
    { name: 'iPad Air Portrait', use: { ...devices['iPad Air'] } },
    { name: 'iPad Air Landscape', use: { ...devices['iPad Air landscape'] } },
    { name: 'Galaxy Tab S4 Portrait', use: { ...devices['Galaxy Tab S4'] } },

    // Optional: headed mode for debugging
    { name: 'Desktop Chrome Headed', use: { ...devices['Desktop Chrome'], headless: false } },
  ],

  workers: 32,
});
