import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

const html = htm.bind(h);

class App extends Component {
  render() {
    return html`
      <div id="main">
        <div id="fContainer">

          <header id="topTier">
            <section id="topTier--title-section">
              <h1 id="wcb-h1" class="topHead"><a href="./..">Web Component Boilerplate</a></h1>
            </section>
            <section id="topTier--nav-section">
              <ul id="topTier--nav-section___nav">
                <li>
                  <a href="https://pacificio.com">🏠 pacificIO home</a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">🗺️ MDN on Web Components</a>
                </li>
                <li><a href="https://pacificio.com/training">🌐 About: The Web</a></li>
                <li>
                  <a href="https://djmcloud.com/gallery/">🐟 Exhibitions</a></li>
                <li>
                  <a href="https://github.com/pacificpelican/web-component-boilerplate">🦑 GitHub</a>
                </li>
              </ul>
            </section>
            <section id="topTier--search-section">
              🔍
            </section>
          </header>

          <main id="main-view">
            <section id="main-view--section-img">
              <article id="main-view--section-img___article">
                <img
                  id="main-view--section-img___article-img"
                  src="./static/img/AmazonParrot.jpg"
                  alt="mainImg"
                />
              </article>
              <article id="main-view--section-img___article-caption">
                <h4 id="main-view--section-img___article-caption____h4">
                  Powered by <a href="https://github.com/preactjs/preact">Preact</a>, <a href="https://github.com/developit/htm">htm</a>, and <a href="https://github.com/pikapkg/snowpack">Snowpack</a>
                </h4>
                <h2 id="main-view--section-img___article-caption____h2">
                  Web Component Boilerplate is a fast web site starter with components and modules
                </h2>
              </article>
            </section>
          </main>

          <main id="grid">
            <section id="donate">
              <span><a href="./template0.html">previous layout</a></span>
            </section>
            <section id="store">
              <span><a href="https://altaredwood.com">store</a></span>
            </section>
            <section id="cafe">
              <span>cafe</span>
            </section>
          </main>

        </div>
        <style>
          :root {
            --uiFonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            --contentFonts: "Lato", "Open Sans", "Lucida Grande", "Ubuntu Sans", "Segoe UI", "Roboto", Helvetica, sans-serif;
            --displayFonts: "Gentona", "Baufra", Georgia, serif;
            --monoFonts: "Hack", "Fira Sans", "Anonymous Pro", "Inconsolata", monospace;
            --textFonts: "Calluna", "Caslon", "Garamond", serif;
            --sFonts: Courier, "Open Sans", monospace;
            --condensedFonts: "Densia Sans", "Fira Sans Condensed", "Roboto Condensed", "Open Sans Condensed", "Ubuntu Condensed", sans-serif;
            --white-color: white;
          }
          html {
            box-sizing: border-box;
          }
          body {
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 0px;
            padding-right: 0px;
            background: white;
          }
          img#main-view--section-img___article-img {
            border-radius: 32em;
          }
          h1.topHead a {
            text-decoration: none;
            color: inherit;
          }
          section#main-view--section-img,
          section#newsAndEvents,
          main#grid {
            width: calc(85vw + 20px);
            margin-left: calc(4.25vw + 15pt);
          }
          a#newsAndEvents--box1__link___1,
          a#newsAndEvents--box1__link___2,
          a#newsAndEvents--box2__link___1,
          a#newsAndEvents--box3__link___1 {
            background: rgba(106, 158, 182, 0.815);
            color: var(--white-color, white);
            padding-inline-start: calc(1vw + 5px);
            padding-inline-end: calc(1vw + 5px);
            padding-block-start: calc(0.4vw + 5px);
            padding-block-end: calc(0.4vw + 5px);
          }
          footer#readMore {
            margin-block-start: calc(2vh + 10px);
          }
          section#newsAndEvents {
            margin-block-start: calc(2vh + 10px);
          }
          section#newsAndEvents a {
            color: inherit;
          }
          section#newsAndEvents img {
            max-width: 99%;
          }
          header#newsAndEvents--box1__header {
            margin-inline-start: calc(0px);
            height: calc(10vh + 100px);
            background: red;
            background-image: url("./static/img/waterfall-near-Juneau--Alaska.jpg");
          }
          header#newsAndEvents--box2__header {
            height: calc(10vh + 100px);
            background: blue;
            background-image: url("./static/img/Outer-Bay--Lopez-Island--Washington.jpg");
          }
          header#newsAndEvents--box3__header {
            height: calc(10vh + 100px);
            background: green;
            background-image: url("./static/img/raccoon-in-trash-can-2011byDanielJMcKeown-500x500.jpg");
          }
          section#donate,
          section#store,
          section#cafe {
            margin-inline-start: calc(2vw);
            height: calc(10vh + 100px);
            background: red;
          }
          section#store {
            background-image: url("./static/img/FR-1.jpg");
          }
          section#cafe {
            background-image: url("./static/img/pacificioLogo-b0097e479c07e80a159aa00aa6d580c0.jpg");
          }
          section#donate {
            background-image: url("../static/img/North-Cascades-National-Park4.jpg");
          }
          section#donate a, section#store a {
            color: inherit;
            text-decoration: none;
          }
          @media (max-width: 779px) {
            section#donate,
            section#store,
            section#cafe {
              width: calc(80vw + 5px);
            }
            #topTier--nav-section {
              line-height: 2.1;
            }
            #topTier--nav-section a {
              text-decoration: none;
            }
            #topTier--nav-section li {
              list-style: none;
            }
            section#newsAndEvents article {
              width: calc(80vw + 5px);
              margin-left: calc(0.5vw);
              margin-right: calc(0.5vw);
              background: var(--beigeColor, white);
              margin-bottom: calc(5px + 2vw);
              padding-block-start: calc(5px + 1vw);
              padding-block-end: calc(5px + 2vw);
            }
            article#main-view--section-img___article img {
              width: calc(75vw + 25px);
            }
            header#topTier {
              margin-inline-start: calc(4vw + 10px);
            }
            #fContainer {
              margin-left: calc(-1vw - 5px);
            }
          }
          @media (min-width: 780px) {
            main#grid {
              display: flex;
            }
            h1#frye {
              margin-block-start: calc(1vh + 5px);
            }
            section#topTier--search-section {
              margin-block-start: calc(1vh + 5px);
            }
            section#donate,
            section#store,
            section#cafe {
              width: calc(30vw + 5px);
            }
            ul#topTier--nav-section___nav,
            section#newsAndEvents {
              display: flex;
            }
            header#topTier {
              display: flex;
              justify-content: space-evenly;
            }
            section#newsAndEvents article {
              width: calc(30vw + 20px);
              margin-left: calc(0.5vw);
              margin-right: calc(0.5vw);
              background: var(--beigeColor, white);
              margin-bottom: calc(5px + 2vw);
              padding-block-start: calc(5px + 1vw);
              padding-block-end: calc(5px + 2vw);
              padding-inline-start: calc(5px + 1vw);
              padding-inline-end: calc(5px + 2vw);
            }
            article#main-view--section-img___article img {
              width: 98%;
            }
            ul#topTier--nav-section___nav li {
              list-style: none;
              margin-inline-end: calc(2vw + 10px);
            }
          }
          main#grid {
            color: white;
            font-family: var(--uiFonts, monospace);
          }
          main#grid span {
            display: block;
            margin-inline-start: calc(4vw + 80px);
            margin-block-start: calc(5vw + 30px);
            font-size: calc(1.4rem);
          }
          h2#newsAndEvents--header,
          h5#ff,
          footer#purple {
            text-align: center;
          }
          h2#newsAndEvents--header,
          footer#purple {
            margin-block-start: calc(25px + 3vh);
          }
          header#topTier {
            font-family: var(--uiFonts, monospace);
          }
          main#main-view {
            font-family: var(--contentFonts, serif);
          }
          main#carousel {
            font-family: var(--displayFonts, sans-serif);
          }
          footer#info {
            background: lightblue;
            height: calc(50vh);
            margin-block-start: calc(15px + 5vh);
            padding-block-start: calc(5px + 1vw);
            padding-block-end: calc(5px + 2vw);
            margin-inline-start: calc(5px + 1vw);
            margin-inline-end: calc(5px + 2vw);
          }
          ul#topTier--nav-section___nav a {
            color: inherit;
            text-decoration: none;
          }
        </style>
      </div>
    `;
  }
}

export default App;
