import { html, fixture, expect } from '@open-wc/testing';
import '../src/login-footer.js';

describe('LoginFooter', () => {
  it('should render the footer with the correct links and copyright notice', async () => {
    const el = await fixture(html`<login-footer></login-footer>`);
    const footer = el.shadowRoot.querySelector('footer');
    const nav = el.shadowRoot.querySelector('nav');
    const links = nav.querySelectorAll('a');
    const copyright = el.shadowRoot.querySelector('p');

    expect(footer).to.exist;
    expect(nav).to.exist;
    expect(links.length).to.equal(5);
    expect(links[0].getAttribute('href')).to.equal('#contact');
    expect(links[0].textContent).to.equal('Contact Us');
    expect(links[1].getAttribute('href')).to.equal('#sitemap');
    expect(links[1].textContent).to.equal('Sitemap');
    expect(links[2].getAttribute('href')).to.equal('#privacy');
    expect(links[2].textContent).to.equal('Privacy');
    expect(links[3].getAttribute('href')).to.equal('#terms');
    expect(links[3].textContent).to.equal('Terms of Use');
    expect(links[4].getAttribute('href')).to.equal('#accessibility');
    expect(links[4].textContent).to.equal('Accessibility');
    expect(copyright).to.exist;
    expect(copyright.textContent).to.equal(
      '© 2024 Not another Login Page, Inc.',
    );
  });

  it('should have correct styles applied', async () => {
    const el = await fixture(html`<login-footer></login-footer>`);
    const footer = el.shadowRoot.querySelector('footer');
    const computedStyle = getComputedStyle(footer);

    expect(computedStyle.backgroundColor).to.equal('rgb(0, 0, 0)');
    expect(computedStyle.color).to.equal('rgb(255, 255, 255)');
    expect(computedStyle.padding).to.equal('16px');
    expect(computedStyle.textAlign).to.equal('center');
    expect(computedStyle.position).to.equal('fixed');
    expect(computedStyle.bottom).to.equal('0px');
  });
});
