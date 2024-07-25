import { html, fixture, expect } from '@open-wc/testing';
import '../src/login-page.js';

describe('LoginPage', () => {
  it('should render the login page with header, auth section, and footer', async () => {
    const el = await fixture(html`<login-page></login-page>`);
    const header = el.shadowRoot.querySelector('login-header');
    const authSection = el.shadowRoot.querySelector('auth-section');
    const footer = el.shadowRoot.querySelector('login-footer');

    expect(header).to.exist;
    expect(authSection).to.exist;
    expect(footer).to.exist;
  });

  it('should apply the correct background color from CSS custom property', async () => {
    const el = await fixture(
      html`<login-page
        style="--login-page-background-color: #f0f0f0;"
      ></login-page>`,
    );
    const computedStyle = getComputedStyle(el);

    expect(computedStyle.backgroundColor).to.equal('rgb(240, 240, 240)');
  });
});
