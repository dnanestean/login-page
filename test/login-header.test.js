import { html, fixture, expect } from '@open-wc/testing';
import '../src/login-header.js';

describe('Header', () => {
  it('should render the header with a title and navigation links', async () => {
    const el = await fixture(html`<login-header></login-header>`);
    const header = el.shadowRoot.querySelector('header');
    const nav = el.shadowRoot.querySelector('nav');
    const links = nav.querySelectorAll('a');
    const title = header.querySelector('h1');

    expect(header).to.exist;
    expect(title.textContent).to.equal('Not another Login Page');
    expect(nav).to.exist;
    expect(links.length).to.equal(3);
    expect(links[0].getAttribute('href')).to.equal('#home');
    expect(links[0].textContent).to.equal('Home');
    expect(links[1].getAttribute('href')).to.equal('#about');
    expect(links[1].textContent).to.equal('About');
    expect(links[2].getAttribute('href')).to.equal('#contact');
    expect(links[2].textContent).to.equal('Contact');
  });

  it('should have correct styles applied', async () => {
    const el = await fixture(html`<login-header></login-header>`);
    const header = el.shadowRoot.querySelector('header');
    const computedStyle = getComputedStyle(header);

    expect(computedStyle.backgroundColor).to.equal('rgb(63, 107, 142)');
    expect(computedStyle.color).to.equal('rgb(255, 255, 255)');
    expect(computedStyle.padding).to.equal('16px');
    expect(computedStyle.textAlign).to.equal('center');
    expect(computedStyle.display).to.equal('flex');
    expect(computedStyle.justifyContent).to.equal('space-between');
    expect(computedStyle.alignItems).to.equal('center');
  });
});
