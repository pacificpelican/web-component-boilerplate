import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

const html = htm.bind(h);

export default class App extends Component {
  render({ creatorCredit, creatorURL }) {
    return html`
      <div id="main" class="animal">
        <h3>copyright 2022 <a href="${creatorURL}">${creatorCredit}</a></h3>
       
        <br />
        <footer>
          
        </footer>
        <style>
          :root {
            --uiFonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            --contentFonts: "Lato", "Open Sans", "Lucida Grande", "Ubuntu Sans", "Segoe UI", "Roboto", Helvetica, sans-serif;
            --displayFonts: "Gentona", "Baufra", Georgia, serif;
            --monoFonts: "Hack", "Fira Sans", "Anonymous Pro", "Inconsolata", monospace;
            --textFonts: "Calluna", "Caslon", "Garamond", serif;
            --sFonts: Courier, "Open Sans", monospace;
            --condensedFonts: "Densia Sans", "Fira Sans Condensed", "Roboto Condensed", "Open Sans Condensed", "Ubuntu Condensed", sans-serif;
          }
          div.animal {
            background: white;
          }
          footer#web-component-boilerplate {
            font-family: var(--condensedFonts, sans-serif);
            font-size: calc(1.3rem);
          }
          footer#web-component-boilerplate p {
            padding-top: calc(7vh + 10pt);
            padding-left: calc(6vw + 10pt);
          }
          footer#web-component-boilerplate p a {
            color: inherit;
          }
          footer#web-component-boilerplate p a:hover {
            font-size: calc(2.3rem);
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
          div.animal {
            margin-left: 5px;
            margin-right: 5px;
            
          }
        </style>
      </div>
    `;
  }
}

