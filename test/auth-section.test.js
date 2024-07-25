import { html, fixture, expect } from '@open-wc/testing';
import '../src/auth-section.js';

describe('AuthSection', () => {
  it('should render login form when not logged in', async () => {
    const el = await fixture(html`<auth-section></auth-section>`);
    const usernameInput = el.shadowRoot.querySelector('#username');
    const passwordInput = el.shadowRoot.querySelector('#password');
    const loginButton = el.shadowRoot.querySelector('lion-button');

    expect(usernameInput).to.exist;
    expect(passwordInput).to.exist;
    expect(loginButton).to.exist;
    expect(loginButton.textContent).to.equal('Login');
  });

  it('should render user details and logout button when logged in', async () => {
    const el = await fixture(
      html`<auth-section
        .loggedIn=${true}
        .user=${{
          name: 'testuser',
          password: 'password',
          image: 'https://via.placeholder.com/100',
        }}
      ></auth-section>`,
    );
    const welcomeMessage = el.shadowRoot.querySelector('p');
    const userDetails = el.shadowRoot.querySelector('user-details');
    const logoutButton = el.shadowRoot.querySelector('#logout');

    expect(welcomeMessage.textContent).to.equal('Welcome, testuser!');
    expect(userDetails).to.exist;
    expect(logoutButton).to.exist;
    expect(logoutButton.textContent).to.equal('Logout');
  });

  it('should log in and display user details', async () => {
    const el = await fixture(html`<auth-section></auth-section>`);
    const usernameInput = el.shadowRoot.querySelector('#username');
    const passwordInput = el.shadowRoot.querySelector('#password');
    const loginButton = el.shadowRoot.querySelector('lion-button');

    usernameInput.value = 'testuser';
    passwordInput.value = 'password';
    loginButton.click();
    await el.updateComplete;

    const welcomeMessage = el.shadowRoot.querySelector('p');
    const userDetails = el.shadowRoot.querySelector('user-details');
    const logoutButton = el.shadowRoot.querySelector('#logout');

    expect(welcomeMessage.textContent).to.equal('Welcome, testuser!');
    expect(userDetails).to.exist;
    expect(logoutButton).to.exist;
  });

  it('should log out and display login form', async () => {
    const el = await fixture(
      html`<auth-section
        .loggedIn=${true}
        .user=${{
          name: 'testuser',
          password: 'password',
          image: 'https://via.placeholder.com/100',
        }}
      ></auth-section>`,
    );
    const logoutButton = el.shadowRoot.querySelector('#logout');

    logoutButton.click();
    await el.updateComplete;

    const usernameInput = el.shadowRoot.querySelector('#username');
    const passwordInput = el.shadowRoot.querySelector('#password');
    const loginButton = el.shadowRoot.querySelector('lion-button');

    expect(usernameInput).to.exist;
    expect(passwordInput).to.exist;
    expect(loginButton).to.exist;
    expect(loginButton.textContent).to.equal('Login');
  });
});
