import { test, expect } from "@playwright/test";

test.describe("ToggleButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173"); // Make sure your React app is running on this URL
  });

  test("starts as non-visible and toggles the text on button click", async ({
    page,
  }) => {
    // Check that the text "Richie is a fat pig" is not visible initially
    const initialTextVisibility = await page.isVisible(
      "text=Richie is a fat pig"
    );
    expect(initialTextVisibility).toBe(false);

    // Click the toggle button
    await page.click("text=Toggle");

    // Check that the text "Richie is a fat pig" is visible after clicking the button
    const textVisibilityAfterClick = await page.isVisible(
      "text=Richie is a fat pig"
    );
    expect(textVisibilityAfterClick).toBe(true);

    // Click the toggle button again
    await page.click("text=Toggle");

    // Check that the text "Richie is a fat pig" is not visible after clicking the button again
    const textVisibilityAfterSecondClick = await page.isVisible(
      "text=Richie is a fat pig"
    );
    expect(textVisibilityAfterSecondClick).toBe(false);
  });
});
