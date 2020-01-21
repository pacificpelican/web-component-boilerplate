import { h, Component, render } from '/web_modules/preact.js';
//  import { html } from '/web_modules/htm/preact.js';
import htm from '/web_modules/htm.js';

const html = htm.bind(h);

class Hammerhead extends Component {
  render() {
    return html`
        <div id="main">
          <h3>Henlo Hammerhead Shark</h3>
          <img src="../static/img/jonas-allert-v4xMAiisCx0-unsplash.jpg" alt="hammerhead-shark" class="pic" />
          <footer id="web-component-boilerplate">web-component-boilerplate from <a href="https://danmckeown.info">Dan McKeown</a> </footer>
          <br />
          <footer>(utilizes <a href="https://github.com/developit/htm">htm</a> and <a href="https://preactjs.com/">Preact</a> for components)</footer>
          <style>
            aside {
              border-style: groove;
              border-color: aqua;
              border-width: 1pt;
            }
            img {
              width: 98vw;
            }
            h3, footer {
              font-family: Courier, "Open Sans", monospace;
            }
          </style>
        </div>
        `;
  }
}

render(html`<${Hammerhead} />`, document.body);
