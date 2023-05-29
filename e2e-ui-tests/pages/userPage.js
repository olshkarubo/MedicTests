const { BasePage } = require("./basePage");
exports.UserPage = class UserPage extends BasePage {
    constructor(page) {
        super(page, '/sign-in');
        this.email = page.locator("[placeholder='Login']");
        this.password = page.locator("[type='password']");
        this.loginButton = page.getByRole('button');
        this.SignUp = page.getByRole('link');
        this.Appointments = page.getByText('Appointments');


    }

    async login(userEmail, userPassword) {
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.loginButton.click();
    }

    async openAppointmentslink() {
        await this.Appointments.click();
    }
    async OpenDoctors() {
        await this.Doctors.click();
    }
    async OpenDepartments() {
            await this.Departments.click();
        }
    }


