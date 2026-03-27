import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/homePage.pom.js';
import testData from '../data/testData.json';

test.describe('Home Search Tests', () =>{
    test('Access Home Page and Search for a Hotel', async ({page}) =>{
        
        const homePage = new HomePage(page);
        await homePage.open();
        await expect(page).toHaveTitle(/Agoda/i);
        await expect(page).toHaveURL(/agoda\.com/);
    });

    test('Verify that user can field hotel name in search box', async ({page}) =>{

        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.searchInput.inputHotelName(testData[0]);
        await expect(homePage.searchInput).toHaveValue(testData[0].hotelName);
    });
});