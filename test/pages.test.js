import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { JSDOM } from "jsdom";
import { build } from "vite";

test("both entry points render their components and preserve page links", async () => {
  const dom = new JSDOM('<!doctype html><main id="main"></main>', {
    url: "http://localhost:5000/"
  });

  globalThis.window = dom.window;
  globalThis.document = dom.window.document;

  try {
    await import("../src/index.js");
    assert.equal(document.querySelector("h1").textContent, "Web Component Boilerplate");
    assert.equal(document.querySelector("#main-view img").getAttribute("src"), "./static/img/AmazonParrot.jpg");
    assert.equal(document.querySelector("#donate a").getAttribute("href"), "./template0.html");
    assert.equal(document.querySelector("h3 a").textContent, "Daniel J. McKeown");
    assert.ok(document.querySelector("style").textContent.includes("@media"));

    document.body.innerHTML = '<main id="main"></main>';
    await import("../src/index--template0.js");
    assert.equal(document.querySelector("h1").textContent, "Web Component Boilerplate");
    assert.equal(document.querySelector("#main-view img").getAttribute("src"), "./static/img/Seattle-from-Magnolia-by-Daniel-J-McKeown-IMG_0775-min.JPG");
    assert.equal(document.querySelector("#newsAndEvents h3").textContent, "Alaska Wildlife");
    assert.equal(document.querySelector("div.animal h3").textContent, "This footer is property of Mango the Quaker Parrot");
    assert.ok(document.querySelector("style").textContent.includes("@media"));
  } finally {
    dom.window.close();
    delete globalThis.window;
    delete globalThis.document;
  }
});

test("production build includes both pages and unchanged static assets", async () => {
  const outDir = await mkdtemp(join(tmpdir(), "web-component-build-"));
  try {
    await build({ build: { outDir }, logLevel: "silent" });
    for (const page of ["index.html", "template0.html"]) {
      const content = await readFile(join(outDir, page), "utf8");
      assert.match(content, /\/assets\/.+\.js/);
      assert.doesNotMatch(content, /\/src\/index/);
    }
    for (const asset of ["favicon.ico", "static/img/AmazonParrot.jpg", "static/img/Baloo.jpg"]) {
      assert.deepEqual(await readFile(join(outDir, asset)), await readFile(asset));
    }
  } finally {
    await rm(outDir, { recursive: true, force: true });
  }
});
