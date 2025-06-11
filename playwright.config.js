// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  reporter: 'html',
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        viewport: null, // Disable fixed viewport, will be maximized by the browser itself
        launchOptions: {
          args: ['--start-maximized'], // Start Chromium maximized
        },
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 1792, height: 1120 }, // Simulate maximized window size
      },
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
        viewport: { width: 1792, height: 1120 }, // Simulate maximized window size
      },
    },
    {
      name: 'Edge',
      use: {
        channel: 'msedge',
        viewport: { width: 1792, height: 1120 }, // Simulate maximized window size
      },
    },
  ],
});
