import { LitElement, html, css } from 'lit';

class LoginFooter extends LitElement {
  static styles = css`
    footer {
      background: #000;
      color: white;
      padding: 1em;
      text-align: center;
      position: fixed;
      width: 100%;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    nav {
      display: flex;
      gap: 1em;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    p {
      color: lightgray;
      font-size: 0.8em;
    }
  `;

  render() {
    return html`
      <footer>
        <nav>
          <a href="#contact">Contact Us</a>
          <a href="#sitemap">Sitemap</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#accessibility">Accessibility</a>
        </nav>
        <p>&copy; 2024 Not another Login Page, Inc.</p>
      </footer>
    `;
  }
}
customElements.define('login-footer', LoginFooter);
