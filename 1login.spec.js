const { test, expect } = require('@playwright/test');

test('Успешный логин на SauceDemo', async ({ page }) => {
    // 1. Открыть сайт
    await page.goto('https://www.saucedemo.com/');
    
    // 2. Найди поле для ввода логина и введи 'standard_user'
    // TODO: Найди селектор для поля Username (смотри инструкцию ниже)
    await page.fill('//input[contains(@placeholder, "Username")]', 'standard_user');

    // 3. Найди поле для ввода пароля и введи 'secret_sauce'
    // TODO: Найди селектор для поля Password
    await page.fill('//input[contains(@placeholder, "Password")]', 'secret_sauce');

    // 4. Найди кнопку Login и кликни по ней
    // TODO: Найди селектор для кнопки Login
    await page.click('//input[contains(@type, "submit")]');

    // 5. Проверить, что открылась страница с товарами (URL содержит 'inventory.html')
    await expect(page).toHaveURL(/inventory.html/);

    // 6. Найди заголовок страницы и проверь, что он содержит текст "Products"
    // TODO: Найди селектор для заголовка страницы
    await expect(page.locator('//span[contains(@class, "title")]')).toHaveText('Products');

    // 7. Скриншот для портфолио
    await page.screenshot({ path: 'saucedemo_login_success.png' });

    console.log('✅ Успешный логин на SauceDemo протестирован!');
});
