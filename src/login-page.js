import { LitElement, html, css } from 'lit';
import './login-header.js';

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
    `;
  }
}

customElements.define('login-page', LoginPage);
