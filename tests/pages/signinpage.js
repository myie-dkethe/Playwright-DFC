export class SignInPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Enter your username (required' });
    this.password = page.getByRole('textbox', { name: 'Enter your password (required' });
    this.continuebtn = page.getByRole('button', { name: 'Continue' });
    this.pin1 = page.getByRole('textbox', { name: 'Pin position 1 (required' });
    this.pin2 = page.getByRole('textbox', { name: 'Pin position 2 (required' });
    this.pin3 = page.getByRole('textbox', { name: 'Pin position 3 (required' });
    this.signinbtn =  page.getByRole('button', { name: 'Sign in' });
    this.homepage = page.getByRole('alert');
    this.activeBtn = page.locator('#filter-active-btn');
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }
}