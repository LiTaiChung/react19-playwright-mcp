import { expect, test } from '@playwright/test';

import mockData from '../../src/queries/mockData';

test.describe('Home Page E2E Tests', () => {
  test('首頁應顯示正確的標題與最新文章列表', async ({ page }) => {
    await page.goto('/');

    // 捕捉頁面截圖以調查問題
    await page.screenshot({
      path: 'test-results/home-page-screenshot.png',
      fullPage: true,
    });

    // 等待文章列表渲染
    await page.waitForSelector('ul li');

    // 驗證標題
    const title = await page.locator('h1').textContent();
    expect(title).toBe('歡迎來到 Ice 的 Blog');

    // 驗證最新文章列表
    const articles = await page.locator('[data-testid^="article-item-"]');
    await expect(articles).toHaveCount(mockData.length);

    for (let i = 0; i < mockData.length; i++) {
      const article = mockData[i];
      const articleElement = articles.nth(i);

      // 驗證文章標題
      const articleTitle = await articleElement
        .locator(`[data-testid="article-title-${i}"]`)
        .textContent();
      expect(articleTitle).toBe(article.title);

      // 驗證文章描述
      const articleDescription = await articleElement
        .locator(`[data-testid="article-description-${i}"]`)
        .textContent();
      expect(articleDescription).toBe(article.description);

      // 驗證文章作者與日期
      const articleMeta = await articleElement
        .locator(`[data-testid="article-meta-${i}"]`)
        .textContent();
      expect(articleMeta).toBe(
        `作者: ${article.author} | 日期: ${article.date}`
      );
    }
  });

  test('導航列應正確運作', async ({ page }) => {
    await page.goto('/');

    // 點擊 About 頁面
    await page.click('text=About');

    // 驗證 URL 是否正確
    await expect(page).toHaveURL('/about');

    // 驗證 About 頁面的標題
    const aboutTitle = await page.locator('h1').textContent();
    expect(aboutTitle).toBe('關於 Ice');
  });
});
