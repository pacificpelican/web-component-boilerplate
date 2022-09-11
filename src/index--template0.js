import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

import App from "./app--template0.js";
import Footer from "./footer--template0.js";

const html = htm.bind(h);

class Index extends Component {
  render() {
    return html`
      <${App} />
      <${Footer} animal="Mango the Quaker Parrot" />
    `;
  }
}

render(
  html`
    <${Index} />
  `,
  document.getElementById("main")
);
