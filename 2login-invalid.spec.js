const { test, expect } = require('@playwright/test');
test('Ошибка входа при неверном пароле', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Введи верный username и невалидный password
    await page.fill('//input[contains(@placeholder, "Username")]', 'standard_user'); // поле логина
    await page.fill('//input[contains(@placeholder, "Password")]', 'wrong_password'); // поле пароля
    await page.click('//input[contains(@type, "submit")]'); // кнопка Login

    // Дождись появления ошибки (найди селектор для сообщения!)
    await expect(page.locator('//h3[@data-test="error"]')).toBeVisible();

    // Проверь текст ошибки
    await expect(page.locator('//h3[@data-test="error"]')).toContainText('Username and password do not match');

    // Cделай скриншот ошибки (по желанию)
    await page.screenshot({ path: 'saucedemo_login_invalid.png' });
});
