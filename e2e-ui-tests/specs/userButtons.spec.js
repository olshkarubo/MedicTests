const { test, expect, request } = require('@playwright/test');
const { userPage } = require('../pages/userPage');
const { LoginPage } = require('../pages/loginPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");


let loginPage;
const env = config.default.use.env;


test.describe('Userpage tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
         await loginPage.open();
         await loginPage.login(users[env].user.email, users[env].user.password);
      
    });

    test ('Open appointments by user', async ({ page }) => {
         await userPage.openAppointments();
         await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/appointments');
    });


});
