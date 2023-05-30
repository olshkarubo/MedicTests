const { test, expect, request } = require('@playwright/test');
const { UserPage } = require('../pages/userPage');
const { LoginPage } = require('../pages/loginPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");


let loginPage;
let userPage;
const env = config.default.use.env;


test.describe('Userpage tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
         await loginPage.open();
         await loginPage.login(users[env].user.email, users[env].user.password);
         userPage = new UserPage(page);
      
    });

    test ('Open appointments by user', async ({ page }) => {
         await userPage.openAppointments();
         await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/appointments');

    });  
    test ('Open doctors by user', async ({ page }) => {
        await userPage.OpenDoctors();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/doctors');
    });
   
   test ('Open departments by user', async ({ page }) => {
    await userPage.OpenDepartments();
    await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/departments');

    });


});
