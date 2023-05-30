const { BasePage } = require("./basePage");
exports.UserPage = class UserPage extends BasePage {
    constructor(page) {
        super(page, '/vertical/appointments');
        this.Appointments = page.locator("//span[contains(text(),'Appointments')]");
        this.Doctors = page.locator("//span[contains(text(),'Doctors')]");
        this.Departments = page.locator("//span[contains(text(),'Departments')]");
        this.DropdownButton = page.getByRole('tc-dropdown-button', "[class='dropdown-link-wrap']");

    }

    async openAppointments() {
        await this.Appointments.click();
    }
    async OpenDoctors() {
        await this.Doctors.click();
    }
    async OpenDepartments() {
            await this.Departments.click();
        }
    }


