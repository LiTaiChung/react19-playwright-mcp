import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 設定檔
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // 測試檔案的目錄
  testDir: 'playwright/tests',

  // 測試結果輸出目錄
  outputDir: 'playwright/test-results',

  // 每個測試的超時時間（毫秒）
  timeout: 30000,

  // 執行測試的工作者數量
  workers: process.env.CI ? 1 : undefined,

  // 重試次數
  retries: process.env.CI ? 2 : 0,

  // 報告相關設定
  reporter: [
    ['html', { open: 'never' }], // HTML 報告
    ['list'], // 命令列報告
  ],

  // 期望值的超時設定
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      maxDiffPixels: 10,
    },
  },

  // 全域測試設定
  use: {
    // 基礎 URL
    baseURL: process.env.BASE_URL || 'http://localhost:5173',

    // 自動截圖設定
    screenshot: 'only-on-failure',

    // 追蹤設定（用於偵錯）
    trace: 'retain-on-failure',

    // 視頻錄製設定
    video: 'on-first-retry',

    // 瀏覽器視窗大小
    viewport: { width: 1280, height: 720 },

    // 其他瀏覽器設定
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  // 瀏覽器專案設定
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--disable-gpu', '--no-sandbox', '--disable-setuid-sandbox'],
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    // 移動裝置測試設定
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],

  // 網頁伺服器設定
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
