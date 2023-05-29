const { BasePage } = require("./basePage");
exports.UserPage = class UserPage extends BasePage {
    constructor(page) {
        super(page, '/vertical/default-dashboard');
        this.Appointments = page.locator("//span[contains(text(),'Appointments')]");
        this.Doctors = page.getByText('Doctors');
        this.Departments = page.getByText('Departments');
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


