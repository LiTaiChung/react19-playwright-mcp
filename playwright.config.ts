import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:5173',
        screenshot: 'on',
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        baseURL: 'http://localhost:5173',
        screenshot: 'on',
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:5173',
        screenshot: 'on', // 可選值: 'on', 'off', 'only-on-failure'
      },
    },
  ],
});
