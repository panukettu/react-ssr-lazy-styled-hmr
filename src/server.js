import React from "react";
import express from "express";
import middleware from "webpack-dev-middleware";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import webpack from "webpack";

import AppComponent from "./App";
import template from "./template";

const isObject = require("is-object");
const compiler = webpack(require("../webpack.dev"));

const app = express();

function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }
  return Array.isArray(assets) ? assets : [assets];
}

app.use(
  middleware(compiler, {
    serverSideRender: true,
    publicPath: "/"
  })
);

app.use(require("webpack-hot-middleware")(compiler));

const port = process.env.PORT || 5000;

// This function makes server rendering of asset references consistent with different webpack chunk/entry configurations
function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }
  return Array.isArray(assets) ? assets : [assets];
}

// The following middleware would not be invoked until the latest build is finished.
app.use((req, res) => {
  const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
  const fs = res.locals.fs;
  const outputPath = res.locals.webpackStats.toJson().outputPath;

  // then use `assetsByChunkName` for server-sider rendering
  // For example, if you have only one main chunk:
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
});

// app.use("/dist", express.static("dist"));

// app.get("/", (req, res) => {
//   console.log("hello");
//   const sheet = new ServerStyleSheet();

//   const html = renderToString(sheet.collectStyles(<AppComponent />));

//   const styles = sheet.getStyleTags();

//   res.send(
//     template({
//       body: html,
//       styles
//     })
//   );
// });

app.listen(port);
console.log(`Server listening in port ${port}`);
