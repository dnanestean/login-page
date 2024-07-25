import { LitElement, html, css } from 'lit';
import './login-header.js';
import './login-footer.js';

class LoginPage extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      background-color: var(--login-page-background-color);
    }
  `;

  constructor() {
    super();
    this.header = 'Login Page';
  }

  render() {
    return html`
      <login-header></login-header>
      <main>
        <h1>${this.header}</h1>
      </main>
      <login-footer></login-footer>
    `;
  }
}

customElements.define('login-page', LoginPage);
