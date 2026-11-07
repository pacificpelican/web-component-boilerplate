import { h, Component, render } from "preact";
import htm from "htm";

import App from "./app.js";
import Footer from "./footer.js";

const html = htm.bind(h);

class Index extends Component {
  render() {
    return html`
      <${App} />
      <${Footer} creatorCredit="Daniel J. McKeown" creatorURL="https://djmcloud.com" />
    `;
  }
}

render(
  html`
    <${Index} />
  `,
  document.getElementById("main")
);
