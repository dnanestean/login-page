import { LitElement, html, css } from 'lit';
import '@lion/ui/define/lion-button.js';

class UserDetails extends LitElement {
  static properties = {
    user: { type: Object },
    showPassword: { type: Boolean },
  };

  constructor() {
    super();
    this.user = {};
    this.showPassword = false;
  }

  static styles = css`
    .user-details {
      border: 1px solid #ccc;
      padding: 1em;
      border-radius: 8px;
      max-width: 300px;
      margin: 2em auto;
      text-align: center;
    }
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
    .password {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5em;
    }
    lion-button {
      padding: 0.5em;
      background-color: #f8f8f8;
      color: #000;
      border: none;
      cursor: pointer;
    }
    lion-button:hover {
      background-color: #e6e6e6;
    }
  `;

  render() {
    return html`
      <div class="user-details">
        <img src=${this.user.image} alt="User Avatar" />
        <h2>${this.user.name}</h2>
        <div class="password">
          <input
            type=${this.showPassword ? 'text' : 'password'}
            .value=${this.user.password}
            readonly
          />
          <lion-button @click=${this.toggleShowPassword}>
            ${this.showPassword ? 'Hide' : 'Show'} Password
          </lion-button>
        </div>
      </div>
    `;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}

customElements.define('user-details', UserDetails);
