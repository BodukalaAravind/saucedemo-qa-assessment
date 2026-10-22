
import { test, expect } from '@playwright/test';

test('Complete a purchase on SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify inventory
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products', { exact: true }))
    .toBeVisible();

  // Add a product
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Verify cart
  await page.locator('.shopping_cart_link').click();
  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();

  // Checkout
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByPlaceholder('Zip/Postal Code').fill('500001');
  await page.getByRole('button', { name: 'Continue' }).click();

  // Verify order summary
  await expect(page.getByText('Payment Information')).toBeVisible();
  await expect(page.getByText('Shipping Information')).toBeVisible();

  // Finish purchase
  await page.getByRole('button', { name: 'Finish' }).click();

  // Verify confirmation
  await expect(
    page.getByRole('heading', { name: 'Thank you for your order!' })
  ).toBeVisible();
});