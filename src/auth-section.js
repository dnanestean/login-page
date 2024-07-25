import { LitElement, html, css } from 'lit';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import './components/user-details.js';

class AuthSection extends LitElement {
  static properties = {
    loggedIn: { type: Boolean },
    user: { type: Object },
  };

  constructor() {
    super();
    this.loggedIn = false;
    this.user = null;
  }

  static styles = css`
    .auth-container {
      text-align: center;
      margin-top: 2em;
      max-width: 500px;
      margin: 2em auto;
    }
    input {
      display: block;
      margin: 0.5em auto;
      padding: 0.5em;
      width: 200px;
    }
    lion-button {
      padding: 0.5em 1em;
      background-color: #3f6b8e;
      color: white;
      border: none;
      cursor: pointer;
    }
    lion-button:hover {
      background-color: #335d7c;
    }

    #logout {
      background-color: #fc3d39;
    }

    #logout:hover {
      background-color: #e02a2a;
    }
  `;

  render() {
    return html`
      <div class="auth-container">
        ${this.loggedIn
          ? html`
              <p>Welcome, ${this.user.name}!</p>
              <user-details .user=${this.user}></user-details>
              <lion-button id="logout" @click=${this.logout}
                >Logout</lion-button
              >
            `
          : html`
              <lion-input
                id="username"
                type="text"
                placeholder="Username"
              ></lion-input>
              <lion-input
                id="password"
                type="password"
                placeholder="Password"
              ></lion-input>
              <lion-button @click=${this.login}>Login</lion-button>
            `}
      </div>
    `;
  }

  login() {
    const username = this.shadowRoot.getElementById('username').value;
    const password = this.shadowRoot.getElementById('password').value;

    if (username && password) {
      this.user = {
        name: username,
        password,
        image: 'https://via.placeholder.com/100',
      };
      this.loggedIn = true;
    }
  }

  logout() {
    this.user = null;
    this.loggedIn = false;
  }
}

customElements.define('auth-section', AuthSection);
