import { expect, test } from '@playwright/test';

test.describe('About Page E2E Tests', () => {
  test('About 頁面應顯示正確的標題與內容', async ({ page }) => {
    await page.goto('/about');

    // 驗證標題
    const title = await page.locator('h1').textContent();
    expect(title).toBe('關於 Ice');

    // 等待段落內容渲染
    await page.waitForSelector('p.text-gray-600');

    // 驗證內容
    const content = await page
      .locator('[data-testid="about-description"]')
      .textContent();
    expect(content).toBe(
      '我是一名熱愛技術的開發者，專注於 Web 開發與技術分享。希望透過這個 Blog 與大家交流與學習。'
    );
  });
});
