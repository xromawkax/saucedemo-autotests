const { test, expect } = require('@playwright/test');
test('Добавление товара в корзину', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('//input[contains(@placeholder, "Username")]', 'standard_user');
    await page.fill('//input[contains(@placeholder, "Password")]', 'secret_sauce');
    await page.click('//input[contains(@type, "submit")]');

    // Жди перехода на inventory
    await expect(page).toHaveURL(/inventory/);

    // Кликни по кнопке "Add to cart" для первого товара
    await page.click('//button[@id="add-to-cart-sauce-labs-backpack"]');

    // Кликни по иконке корзины
    await page.click('//a[@class="shopping_cart_link"]');

    // Проверь, что в корзине есть один товар
    await expect(page.locator('//span[@class="shopping_cart_badge"]')).toHaveCount(1);

    await page.screenshot({ path: 'saucedemo_cart.png' });
});
