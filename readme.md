 # web-component-boilerplate-website

 ---

 *this is the web site for [web-component-boilerplate](https://github.com/pacificpelican/web-component-boilerplate) deployed at [https://web-component-boilerplate.pacificio.com](https://web-component-boilerplate.pacificio.com) via GitHub pages*

 ---

Licensed under [ISC License](https://opensource.org/licenses/ISC) copyright (c) 2020 [Dan McKeown](https://danmckeown.info).

## Table Of Contents
- [Features](#features)
- [QuickStart](#quickstart)
- [Requirements](#requirements)
- [Usage](#usage)
- [Installation](#installation)
- [Demo](#demo-app)

![Baloo](./static/img/Baloo.jpg)

## features
This project provides the following features:
- Starter for new component-powered web projects powered by [Preact](https://github.com/preactjs/preact) and [htm](https://github.com/developit/htm)
- Bundles dependencies using [Snowpack](https://github.com/pikapkg/snowpack)
- To deploy this site, upload the index.html and the static, src, and web_modules directories to your server and serve it as static html

## quickstart

===
download and build
===

0. git clone `git-url-here`
1. `cd web-component-boilerplate`
2. `npm install`
3. `npm run build`

===
serve the site
===

4. `npm run start` *(defaults to using the `serve` tool but you can serve the site with your preferred static site server)*
5. `open [http://localhost:5000](http://localhost:5000)` *(to visit the server)*

## requirements
- NodeJS
- NPM

## installation
- Check [NodeJS](https://nodejs.org/en/) version: `node --version`
- Check [NPM](https://www.npmjs.com/) version: `npm --version`
- Clone the Git repo: `git clone <repo-url>`

## usage
- Use the code as a scaffold for creating a new site (for example edit app.js or create a new component to import into index.js)
- Make sure to upload the index.html, /src directory, /static directory, and the /web_modules directory to your live site when you deploy
- By convention, non-code assets like images can be stored in the /static directory and referenced directly

## demo-app
- For now, the best live example (built with an early version of web-component-boilerplate) is the [sf3am.com front page](https://sf3am.com)
- Learn more about the project in [this screencast](https://www.youtube.com/watch?v=lcvIB6ryddE)
