import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/homePage.pom.js';

test.describe('Home Search Tests', () =>{
    test('Access Home Page and Search for a Hotel', async ({page}) =>{
        
        const homePage = new HomePage(page);
        await homePage.open();
        await expect(page).toHaveTitle(/Agoda/i);
        await expect(page).toHaveURL(/agoda\.com/);
    });
});