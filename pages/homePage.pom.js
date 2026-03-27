import { get } from "node:http";

export class HomePage {
    constructor(page){
        this.page = page;

        this.searchInput =page.getByTestId("textInput");
        this.

    }


    async open(){
        await this.page.goto('/');
    }
}