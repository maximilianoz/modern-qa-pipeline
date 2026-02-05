import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(page.locator('.title')).toContainText('Products');
  console.log('✅ ¡Page Object Model works!');
});