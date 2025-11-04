const { test, expect } = require('@playwright/test');

test('Успешный logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('//input[contains(@placeholder, "Username")]', 'standard_user');
    await page.fill('//input[contains(@placeholder, "Password")]', 'secret_sauce');
    await page.click('//input[contains(@type, "submit")]');

    // Жди перехода на inventory
    await expect(page).toHaveURL(/inventory/);

    // Открой меню
    await page.click('//button[@id="react-burger-menu-btn"]'); // обычно "бургер" в левом верхнем углу

    // Кликни logout
    await page.click('//a[@id="logout_sidebar_link"]');

    // Проверь, что ты снова на странице логина
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await page.screenshot({ path: 'saucedemo_logout.png' });
});
