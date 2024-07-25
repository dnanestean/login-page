import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/user-details.js';

describe('UserDetails', () => {
  it('should render user details with image, name, and hidden password', async () => {
    const user = {
      name: 'testuser',
      password: 'password',
      image: 'https://via.placeholder.com/100',
    };
    const el = await fixture(html`<user-details .user=${user}></user-details>`);
    const img = el.shadowRoot.querySelector('img');
    const name = el.shadowRoot.querySelector('h2');
    const passwordInput = el.shadowRoot.querySelector('.password input');
    const button = el.shadowRoot.querySelector('.password lion-button');

    expect(img.src).to.equal('https://via.placeholder.com/100');
    expect(name.textContent).to.equal('testuser');
    expect(passwordInput.type).to.equal('password');
    expect(passwordInput.value).to.equal('password');
    expect(button.textContent).to.equal('Show Password');
  });

  it('should toggle password visibility when button is clicked', async () => {
    const user = {
      name: 'testuser',
      password: 'password',
      image: 'https://via.placeholder.com/100',
    };
    const el = await fixture(html`<user-details .user=${user}></user-details>`);
    const button = el.shadowRoot.querySelector('.password lion-button');
    const passwordInput = el.shadowRoot.querySelector('.password input');

    // Initially, password should be hidden
    expect(passwordInput.type).to.equal('password');
    expect(button.textContent).to.equal('Show Password');

    // Click to show password
    button.click();
    await el.updateComplete;
    expect(passwordInput.type).to.equal('text');
    expect(button.textContent).to.equal('Hide Password');

    // Click to hide password
    button.click();
    await el.updateComplete;
    expect(passwordInput.type).to.equal('password');
    expect(button.textContent).to.equal('Show Password');
  });
});
