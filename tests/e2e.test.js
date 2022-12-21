
// @ts-check
import { test, expect } from '@playwright/test';
import { format } from 'date-fns';
//has nav items
test.describe.configure({ mode: 'parallel' });

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}
test('Runs Tasks,Projects,Calender', async ({ page }) => {
    //renders navbar
    await page.goto('http://localhost:5173/');
    await expect(page.getByText("Timer Calender Projects")).toBeVisible()
    //navigate to projects page
    await page.locator('text=Projects').click()
    await expect(page).toHaveURL('http://localhost:5173/projects')
    await expect(page.getByTestId('toggle-projects')).toBeVisible()
    //add new project
    await page.getByPlaceholder('project name').click();
    await page.getByPlaceholder('project name').fill('test-project')
    await page.getByRole('button', { name: 'Add Project' }).click();
    expect(page.getByText("test-project")).toBeVisible()
    //navigate to Timer/tasks
    await page.getByRole('link', { name: 'Timer' }).click();
    //add new item to list
    expect(page).toHaveURL('http://localhost:5173/timer')
    await page.getByTestId('task-name').click();
    await page.getByTestId('task-name').fill('the fourth test');
    await page.getByTestId('task-form').locator('div').getByRole('button').click();
    await page.getByText('test-project').click();
    await page.getByTestId('reusableButton').click();
    await expect(page.getByText('the fourth test test-project')).toHaveCount(1)
    //choose task 
    await page.getByText('the fourth test').click();
    await expect(page.getByText("0:0:0")).toBeVisible()
    //play time for task
    await page.getByTestId('play-button').click();
    await delay(4000)
    await page.getByTestId('stop-button').click()
    await expect(page.getByText("0:1:1")).toBeVisible()
    await page.locator('.rounded-full').first().click();
    await expect(page.getByText('the fourth test test-project 0:1:1')).toBeVisible()
    //remove time from task
    await page.getByTestId('task-list-ul').locator('div').filter({ hasText: 'the fourth test test-project 0:1:1' }).getByRole('button').first().click();
    await expect(page.getByText("the fourth test test-project")).toBeVisible()
    //delete task
    await page.getByTestId('task-list-ul').locator('div').filter({ hasText: 'the fourth test' }).getByRole('button').nth(1).click();
    await expect(page.getByText('the fourth test')).toHaveCount(0)
    //navigate to calender
    await page.getByRole('link', { name: 'Calender' }).click();
    await expect(page).toHaveURL('http://localhost:5173/calender')
    //current date shows 
    const currentDate = format(new Date(), 'PP')
    console.log(currentDate)
    await expect(page.locator('text=/You picked/i')).toContainText(currentDate)
    //tasks for 18th of december  shows
    await page.getByRole('button', { name: '18th December (Sunday)' }).click();
    await expect(page.locator('text=test1')).toBeVisible()
    //delete project
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL('http://localhost:5173/projects')
    await expect(page.getByText('test-project')).toHaveCount(1)
    await page.getByTestId('project-list').locator('div').filter({ hasText: 'test-project' }).getByRole('button').click();
    await expect(page.getByText('test-project')).toHaveCount(0)



})
test('Runs Toggle:AllTasks,Projects', async ({ page }) => {
    //navigate to project
    await page.goto('http://localhost:5173/projects');
    await expect(page).toHaveURL('http://localhost:5173/projects')
    //renders All Tasks
    await page.getByTestId('toggle-tasks').click()
    //checks that toggled item has lighter colour (bg-slate-600)
    await expect(page.getByTestId("toggle-tasks")).toHaveClass(/bg-slate-600/)
    await expect(page.getByTestId("toggle-projects")).toHaveClass(/bg-slate-900/)
    await expect(page.locator('text=test1')).toBeVisible()
    await page.getByTestId('toggle-projects').click()
    await expect(page.getByTestId("toggle-tasks")).toHaveClass(/bg-slate-900/)
    await expect(page.getByTestId("toggle-projects")).toHaveClass(/bg-slate-600/)
})