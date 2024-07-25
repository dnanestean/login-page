import { LitElement, html, css } from 'lit';

class Header extends LitElement {
  static styles = css`
    header {
      background: #3f6b8e;
      color: #fff;
      padding: 1em;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav {
      display: flex;
      gap: 1em;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Not another Login Page</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('login-header', Header);
