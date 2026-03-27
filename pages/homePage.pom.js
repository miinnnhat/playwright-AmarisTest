import { get } from "node:http";

//Locators 
export class HomePage {
    constructor(page){
        this.page = page;

        this.searchInput =page.getByTestId("textInput");
        

    }

// Method to open the home page
    async open(){
        await this.page.goto('/');
    }

// Method to input hotel name in search box
    async inputHotelName(testData){
        await this.searchInput.pressSequentially(testData.hotelName, {delay: 100});

        // const searchResults = this.page.
    }
}