const { expect } = require('@playwright/test');

class Validator {
    constructor(page) {
        this.page = page;
    }

    async apiResponse(urlPart, expectedStatus = 200, timeout = 5000) {
        const response = await this.page.waitForResponse(
            r => r.url().includes(urlPart) && r.status() === expectedStatus,
            { timeout }
        );
        return response;
    }

    async urlResponse(urlPart, timeout = 5000) {
        await expect(this.page).toHaveURL(new RegExp(`.*${urlPart}`), { timeout });
    }
}

module.exports = { Validator };