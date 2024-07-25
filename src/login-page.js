import { LitElement, html, css } from 'lit';
import './login-header.js';
import './login-footer.js';
import './auth-section.js';

class LoginPage extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      background-color: var(--login-page-background-color);
    }
  `;

  render() {
    return html`
      <login-header></login-header>
      <main>
        <auth-section></auth-section>
      </main>
      <login-footer></login-footer>
    `;
  }
}

customElements.define('login-page', LoginPage);
