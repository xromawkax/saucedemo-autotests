const { test, expect } = require('@playwright/test');

test('Логин с заблокированным пользователем', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.fill('//input[contains(@placeholder, "Username")]', 'locked_out_user');
    await page.fill('//input[contains(@placeholder, "Password")]', 'secret_sauce');
    await page.click('//input[contains(@type, "submit")]');

    // Жди появления ошибки
    await expect(page.locator('//h3[@data-test="error"]')).toBeVisible();
    await expect(page.locator('//h3[@data-test="error"]')).toContainText('Sorry, this user has been locked out');
    await page.screenshot({ path: 'saucedemo_locked_out.png' });
});
