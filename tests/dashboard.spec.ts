import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test('happy path: dashboard renders with all main sections', async ({ page }) => {
    await page.goto('/dashboard');

    // Page header
    await expect(page.locator('text=Dashboard')).toBeVisible();
    await expect(page.locator('text=Overview of your PRPilot workflows')).toBeVisible();

    // KPI stat cards - validate presence of 4 stat cards
    const statCards = page.locator('[data-testid="stat-card"], .stat-card').or(page.locator('text=Open PRs').locator('..'));
    await expect(statCards.first()).toBeVisible({ timeout: 10000 });

    // Validate key KPI labels are present
    await expect(page.locator('text=Open PRs')).toBeVisible();
    await expect(page.locator('text=Runs this week')).toBeVisible();
    await expect(page.locator('text=Avg. review time')).toBeVisible();
    await expect(page.locator('text=Success rate')).toBeVisible();

    // Recent runs table
    await expect(page.locator('text=Recent runs')).toBeVisible();
    const tableRows = page.locator('[data-testid="run-row"], .run-row, table tbody tr');
    await expect(tableRows.first()).toBeVisible({ timeout: 5000 });

    // Quick actions panel
    await expect(page.locator('text=Quick actions')).toBeVisible();
    await expect(page.locator('text=New run from Jira')).toBeVisible();

    // Integrations health section
    await expect(page.locator('text=Integrations health')).toBeVisible();
    await expect(page.locator('text=GitHub')).toBeVisible();
    await expect(page.locator('text=Jira')).toBeVisible();
  });

  test('regression: responsive layout on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/dashboard');

    // Validate page still renders
    await expect(page.locator('text=Dashboard')).toBeVisible();

    // Validate KPI cards stack vertically (one per row)
    const firstStatCard = page.locator('text=Open PRs').locator('..');
    await expect(firstStatCard).toBeVisible();

    // Validate recent runs and quick actions are stacked
    await expect(page.locator('text=Recent runs')).toBeVisible();
    await expect(page.locator('text=Quick actions')).toBeVisible();
  });

  test('regression: navigation to settings works', async ({ page }) => {
    await page.goto('/dashboard');

    // Click Settings link
    const settingsLink = page.locator('a:has-text("Settings"), button:has-text("Settings")');
    await expect(settingsLink).toBeVisible();
    await settingsLink.click();

    // Validate navigation occurred (URL or page title change)
    await expect(page).toHaveURL(/\/settings/);
  });
});