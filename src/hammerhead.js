import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

const html = htm.bind(h);

export default class App extends Component {
  render({ animal }) {
    return html`
      <div id="main">
        <h3>Henlo ${animal}</h3>
        <div class="grid">
          <section id="sidebar">µ</section>
          <img
            src="../static/img/jonas-allert-v4xMAiisCx0-unsplash.jpg"
            alt="hammerhead-shark"
            class="pic"
          />
          <footer id="web-component-boilerplate">
            web-component-boilerplate from <a href="https://danmckeown.info">Dan McKeown</a>
          </footer>
          <aside id="rightSide">(utilizes <a href="https://github.com/developit/htm">htm</a> and <a href="https://preactjs.com/">Preact</a> for components)</aside>
        </div>

        <br />
        <footer>
          
        </footer>
        <style>
          :root {
            --uiFonts: "Ubuntu Mono", "Inconsolata", "Anonymous Pro", "Hack",
              Menlo, monospace;
            --contentFonts: "Lato", "Open Sans", "Lucida Grande", "Ubuntu Sans",
              "Segoe UI", "Roboto", Helvetica, sans-serif;
            --displayFonts: "Gentona", "Baufra", Georgia, serif;
            --monoFonts: "Anonymous Pro", "Hack", "Fira Sans", "Inconsolata",
              monospace;
            --textFonts: "Calluna", "Caslon", "Garamond" serif;
            --sFonts: Courier, "Open Sans", monospace;
          }
          aside,
          footer#web-component-boilerplate {
            border-style: groove;
            border-color: aqua;
            border-width: 1pt;
          }
          img.pic {
            width: 100%;
            height: auto;
          }
          h3,
          footer {
            font-family: var(--sFonts, sans);
          }
          @media only screen and (max-width: 800px) {
          }
          @media only screen and (min-width: 801px) {
            .grid {
              display: grid;
              grid-gap: 10px;
              grid-template-columns: 100px 1fr 3fr 1fr;
              background-color: #fff;
              color: #444;
            }
          }
        </style>
      </div>
    `;
  }
}

