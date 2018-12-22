const isObject = require("is-object");
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "./App";
import template from "./template";

function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }
  return Array.isArray(assets) ? assets : [assets];
}

export function getTemplate(bundles) {
  const sheet = new ServerStyleSheet();
  sheet.collectStyles(<App />);
  const html = renderToString(<App />);
  const styles = sheet.getStyleTags();

  return template({
    html,
    bundles,
    styles
  });
}

export function HMR(req, res) {
  const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
  const fs = res.locals.fs;
  const outputPath = res.locals.webpackStats.toJson().outputPath;

  const getCss = () =>
    normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith(".css"))
      .map(path => fs.readFileSync(outputPath + "/" + path))
      .join("\n");

  const getJs = () =>
    normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith(".js"))
      .map(path => `<script src="${path}"></script>`)
      .join("\n");

  const html = getTemplate(getJs());
  res.send(`
<html>
  <head>
    <title>My App</title>
    <style>
		${normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith(".css"))
      .map(path => fs.readFileSync(outputPath + "/" + path))
      .join("\n")}
    </style>
  </head>
  <body>
    <div id="root"></div>
		${normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith(".js"))
      .map(path => `<script src="${path}"></script>`)
      .join("\n")}
  </body>
</html>
  `);
}
