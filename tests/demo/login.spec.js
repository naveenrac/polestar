import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.spec'

test('tests of PoleStart website', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.gotoOtherPages();

}); 