import { expect, test } from '@playwright/test';

import mockData from '../../src/queries/mockData';

test.describe('Article Page E2E Tests', () => {
  test('文章頁面應顯示正確的文章內容', async ({ page }) => {
    for (let i = 0; i < mockData.length; i++) {
      const article = mockData[i];
      await page.goto(`/article/${i + 1}`);

      // 驗證標題
      const title = await page.locator('h1').textContent();
      expect(title).toBe(article.title);

      // 驗證描述
      const description = await page.locator('p').first().textContent();
      expect(description).toBe(article.description);

      // 驗證作者與日期
      const meta = await page.locator('div.text-sm').textContent();
      expect(meta).toBe(`作者: ${article.author} | 日期: ${article.date}`);
    }
  });
});
