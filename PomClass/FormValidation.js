
class FormValidation {

    constructor(page) {
        this.name = page.getByText('Name is required');
        this.email = page.getByText('Email is required');
        this.message = page.getByText('Message cannot be empty');
        this.sendMessageButton = page.getByText('Send Message');
        this.aboutDropdown = page.getByText('Please select what this is about');
    }

    async validateNameError() {
            await this.sendMessageButton.click();
        }

}
module.exports = { FormValidation };