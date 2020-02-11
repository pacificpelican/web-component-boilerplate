import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

import App from "./app.js";
import Hammerhead from "./hammerhead.js";

const html = htm.bind(h);

class Index extends Component {
  render() {
    return html`
      <${App} />
      <${Hammerhead} animal="Hammerhead Shark" />
    `;
  }
}

render(
  html`
    <${Index} />
  `,
  document.getElementById("main")
);
