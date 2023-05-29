const { test, expect, request } = require('@playwright/test');
const { userPage } = require('../pages/userPage');
const { LoginPage } = require('../pages/loginPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let userPage;
const env = config.default.use.env;


test.describe('User Buttons', () => {

    test.beforeEach(async ({ page }) => {
        userPage = new userPage(page);
         await userPage.open();
    });
    
    test (async ({ page }) => {
         await userPage.login(users[env].user.email, users[env].user.password);
         await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
         await userPage.openAppointmentslink();
         await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/appointments');
    });


});
