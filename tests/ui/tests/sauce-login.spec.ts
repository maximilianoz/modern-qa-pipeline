import { test, expect } from '@playwright/test';

test('Login in Sauce Demo', async ({ page }) => {
  // 1. Navegar (SIEMPRE funciona)
  await page.goto('https://www.saucedemo.com');
  console.log('✅ Page loaded');
  
  // 2. Take evidence before login
  await page.screenshot({ path: 'before-login.png' });
  
  // 3. LOGIN (selectores)
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  // 4. Assert success
  await expect(page.locator('.title')).toContainText('Products');
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
  
  // 5. Take evidence after login
  await page.screenshot({ path: 'after-login.png' });
  
  console.log('🎉 Successfull automated Login!');
  console.log('📸 screenshots: before-login.png y after-login.png');
});